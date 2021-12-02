/**
 * WordPress term object from REST API.
 *
 * @typedef {Object} WPTerm
 * @property {number} id          Unique identifier for the term.
 * @property {number} count       Number of published posts for the term.
 * @property {string} description HTML description of the term.
 * @property {string} link        URL of the term.
 * @property {string} name        HTML title for the term.
 * @property {string} slug        An alphanumeric identifier for the term unique to its type.
 * @property {string} taxonomy    Type attribution for the term.
 * @property {Object} meta        Meta fields
 * @property {number} [parent]    The parent term ID.
 */

/**
 * The object that contains info and helper mappings from an array of WPTerm.
 *
 * @typedef {Object} QueryTermsInfo
 * @property {WPTerm[]}               terms     The array of terms.
 * @property {Object<string, WPTerm>} mapById   Object mapping with the term id as key and the term as value.
 * @property {Object<string, WPTerm>} mapByName Object mapping with the term name as key and the term as value.
 * @property {string[]}               names     Array with the terms' names.
 */

/**
 * The block attributes object that contains terms for the Query.
 *
 * @typedef {Object} TermLists
 * @property {number[]} courseTagIds       Array of unique identifiers for each selected term.
 * @property {number[]} learningProgramIds Array of unique identifiers for each selected term.
 */

/**
 * Wrapper function that updates learning programs and course tags.
 *
 * @param {TermLists} newList           Object containing arrays of updated term ids for each query property
 * @param {TermLists} selectedTermLists Object containing arrays of current term ids for each query property.
 * @param {Function}  setAttributes     A core WordPress function to update an attribute.
 * @return {void}
 */
const setTermLists = ( newList, selectedTermLists, setAttributes ) => {
	setAttributes( {
		selectedTermLists: { ...selectedTermLists, ...newList },
	} );
};

/**
 * Returns a helper object with mapping from WPTerms.
 *
 * @param {WPTerm[]} terms The terms to extract of helper object.
 * @return {QueryTermsInfo} The object with the terms information.
 */
export const getTermsInfo = ( terms ) => ( {
	terms,
	...terms?.reduce(
		( accumulator, term ) => {
			const { mapById, mapByName, names } = accumulator;
			mapById[ term.id ] = term;
			mapByName[ term.name ] = term;
			names.push( term.name );
			return accumulator;
		},
		{ mapById: {}, mapByName: {}, names: [] }
	),
} );

/**
 * Returns only existing term ids to be used in `FormTokenField`.
 *
 * @param {string}         taxonomy          The taxonomy slug attribute for the terms.
 * @param {QueryTermsInfo} allTerms          The object with the terms information, the result of `getTermsInfo`.
 * @param {TermLists}      selectedTermLists The object containing arrays of term ids
 * @return {Object[]} Array of objects where `Object.id` is the unique term ID and `Object.value` is the term name.
 */
export const getExistingTermsFormTokenValue = (
	taxonomy,
	allTerms,
	selectedTermLists
) => {
	const termsMapper = {
		learning_program: {
			queryProp: 'learningProgramIds',
			terms: allTerms,
		},
		course_tag: {
			queryProp: 'courseTagIds',
			terms: allTerms,
		},
	};
	const requestedTerm = termsMapper[ taxonomy ];

	return ( selectedTermLists[ requestedTerm.queryProp ] || [] ).reduce(
		( accumulator, termId ) => {
			const term = requestedTerm.terms.mapById[ termId ];
			if ( term ) {
				accumulator.push( {
					id: termId,
					value: term.name,
				} );
			}
			return accumulator;
		},
		[]
	);
};

/**
 * Handles learning programs and course tags changes.
 *
 * @param {QueryTermsInfo} terms             The object with the terms information.
 * @param {string}         queryProperty     The taxonomy query property to be changed.
 * @param {TermLists}      selectedTermLists The object containing arrays of term ids for each query property.
 * @param {Function}       setAttributes     A core WordPress function to update an attribute.
 * @return {void}
 */
export const onTermsChange = (
	terms,
	queryProperty,
	selectedTermLists,
	setAttributes
) => ( newTermValues ) => {
	const termIds = newTermValues.reduce( ( accumulator, termValue ) => {
		const termId = termValue?.id || terms.mapByName[ termValue ]?.id;
		if ( termId ) accumulator.push( termId );
		return accumulator;
	}, [] );
	setTermLists(
		{ [ queryProperty ]: termIds },
		selectedTermLists,
		setAttributes
	);
};
