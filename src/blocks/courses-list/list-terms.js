/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

export const ListTerms = ( props ) => {
	const { post, prefix, taxonomySlug, terms } = props;
	const postTerms = post[ taxonomySlug ] || [];

	// Exit early if the post has no terms assigned to it.
	if ( ! postTerms?.length > 0 ) {
		return null;
	}

	const allTermsById = terms?.mapById || [];
	const termsList = postTerms.reduce( ( accumulator, termId ) => {
		const term = allTermsById[ termId ];
		if ( term ) accumulator.push( term );
		return accumulator;
	}, [] );

	return (
		<p className={ `wp-block-hrswp-posts-list--${ taxonomySlug }-list` }>
			<span>{ prefix }</span>
			{ termsList.map( ( term, i ) => {
				const sep = i > 0 ? ', ' : '';
				return (
					<Fragment key={ i }>
						{ sep }
						<a
							href={ term.link }
							target="_blank"
							rel="noreferrer noopener"
						>
							{ term.name }
						</a>
					</Fragment>
				);
			} ) }
		</p>
	);
};
