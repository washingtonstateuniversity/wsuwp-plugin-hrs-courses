/**
 * External dependencies
 */
import classnames from 'classnames';
import { isUndefined, pickBy } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const apiFetch = wp.apiFetch;
const { addQueryArgs } = wp.url;
const {
	Component,
	RawHTML,
} = wp.element;
const {
	InspectorControls,
	BlockControls,
} = wp.blockEditor;
const {
	PanelBody,
	Placeholder,
	QueryControls,
	RangeControl,
	Spinner,
	ToggleControl,
	Toolbar,
	RadioControl,
} = wp.components;
const {
	dateI18n,
	format,
	__experimentalGetSettings,
} = wp.date;

/**
 * Module constants
 */
const LEARNING_PROGRAMS_LIST_QUERY = {
	per_page: -1,
};
const MAX_POST_COLUMNS = 6;

class LatestCoursesEdit extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			taxLearningProgramsList: [],
		};
	}

	componentDidMount() {
		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/learning_program`, LEARNING_PROGRAMS_LIST_QUERY ),
		} ).then(
			( taxLearningProgramsList ) => {
				if ( this.isStillMounted ) {
					this.setState( { taxLearningProgramsList } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { taxLearningProgramsList: [] } );
				}
			}
		);
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		const { attributes, setAttributes, latestCourses } = this.props;
		const { taxLearningProgramsList } = this.state;
		const {
			displayCourseContentRadio,
			displayCourseContent,
			displayPostDate,
			postLayout,
			columns,
			order,
			orderBy,
			learningPrograms,
			coursesToShow,
			excerptLength,
		} = attributes;

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Course Content Settings' ) }>
					<ToggleControl
						label={ __( 'Display course content' ) }
						checked={ displayCourseContent }
						onChange={ ( value ) => setAttributes( { displayCourseContent: value } ) }
					/>
					{ displayCourseContent &&
					<RadioControl
						label="Show:"
						selected={ displayCourseContentRadio }
						options={ [
							{ label: 'Excerpt', value: 'excerpt' },
							{ label: 'Full post', value: 'full_post' },
						] }
						onChange={ ( value ) => setAttributes( { displayCourseContentRadio: value } ) }
					/>
					}
					{ displayCourseContent && displayCourseContentRadio === 'excerpt' &&
						<RangeControl
							label={ __( 'Max number of words in excerpt' ) }
							value={ excerptLength }
							onChange={ ( value ) => setAttributes( { excerptLength: value } ) }
							min={ 10 }
							max={ 100 }
						/>
					}
				</PanelBody>

				<PanelBody title={ __( 'Post Meta Settings' ) }>
					<ToggleControl
						label={ __( 'Display post date' ) }
						checked={ displayPostDate }
						onChange={ ( value ) => setAttributes( { displayPostDate: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Sorting and Filtering' ) }>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ coursesToShow }
						categoriesList={ taxLearningProgramsList }
						selectedCategoryId={ learningPrograms }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { learningPrograms: '' !== value ? value : undefined } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { coursesToShow: value } ) }
					/>
					{ postLayout === 'grid' &&
						<RangeControl
							label={ __( 'Columns' ) }
							value={ columns }
							onChange={ ( value ) => setAttributes( { columns: value } ) }
							min={ 2 }
							max={ ! hasPosts ? MAX_POST_COLUMNS : Math.min( MAX_POST_COLUMNS, latestCourses.length ) }
							required
						/>
					}
				</PanelBody>
			</InspectorControls>
		);

		const hasPosts = Array.isArray( latestCourses ) && latestCourses.length;
		if ( ! hasPosts ) {
			return (
				<>
					{ inspectorControls }
					<Placeholder icon="admin-post" label={ __( 'Latest Courses' ) }>
						{ ! Array.isArray( latestCourses ) ?
							<Spinner /> :
							__( 'No courses found.' )
						}
					</Placeholder>
				</>
			);
		}

		// Removing courses from display should be instant.
		const displayPosts = latestCourses.length > coursesToShow ?
			latestCourses.slice( 0, coursesToShow ) :
			latestCourses;

		const layoutControls = [
			{
				icon: 'list-view',
				title: __( 'List View' ),
				onClick: () => setAttributes( { postLayout: 'list' } ),
				isActive: postLayout === 'list',
			},
			{
				icon: 'grid-view',
				title: __( 'Grid View' ),
				onClick: () => setAttributes( { postLayout: 'grid' } ),
				isActive: postLayout === 'grid',
			},
		];

		const dateFormat = __experimentalGetSettings().formats.date; // eslint-disable-line no-restricted-syntax

		return (
			<>
				{ inspectorControls }
				<BlockControls>
					<Toolbar controls={ layoutControls } />
				</BlockControls>
				<ul
					className={ classnames( this.props.className, {
						'wp-block-latest-posts__list': true,
						'is-grid': postLayout === 'grid',
						'has-dates': displayPostDate,
						[ `columns-${ columns }` ]: postLayout === 'grid',
					} ) }
				>
					{ displayPosts.map( ( post, i ) => {
						const titleTrimmed = post.title.rendered.trim();
						let excerpt = post.excerpt.rendered;
						if ( post.excerpt.raw === '' ) {
							excerpt = post.content.raw;
						}
						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;
						excerpt = excerptElement.textContent || excerptElement.innerText || '';
						return (
							<li key={ i }>
								<a href={ post.link } target="_blank" rel="noreferrer noopener">
									{ titleTrimmed ? (
										<RawHTML>
											{ titleTrimmed }
										</RawHTML>
									) :
										__( '(Untitled)' )
									}
								</a>
								{ displayPostDate && post.date_gmt &&
									<time dateTime={ format( 'c', post.date_gmt ) } className="wp-block-latest-posts__post-date">
										{ dateI18n( dateFormat, post.date_gmt ) }
									</time>
								}
								{ displayCourseContent && displayCourseContentRadio === 'excerpt' &&
								<div className="wp-block-latest-posts__post-excerpt">
									<RawHTML key="html">
										{
											excerptLength < excerpt.trim().split( ' ' ).length ?
												excerpt.trim().split( ' ', excerptLength ).join( ' ' ) + ' ... <a href=' + post.link + 'target="_blank" rel="noopener noreferrer">Read More</a>' :
												excerpt.trim().split( ' ', excerptLength ).join( ' ' )
										}
									</RawHTML>
								</div>
								}
								{ displayCourseContent && displayCourseContentRadio === 'full_post' &&
								<div className="wp-block-latest-posts__post-full-content">
									<RawHTML key="html">
										{ post.content.raw.trim() }
									</RawHTML>
								</div>
								}
							</li>
						);
					} ) }
				</ul>
			</>
		);
	}
}

export default withSelect( ( select, props ) => {
	const { coursesToShow, order, orderBy, learningPrograms } = props.attributes;
	const { getEntityRecords } = select( 'core' );

	const latestCoursesQuery = pickBy( {
		learningPrograms,
		order,
		orderby: orderBy,
		per_page: coursesToShow,
	}, ( value ) => ! isUndefined( value ) );

	return {
		latestCourses: getEntityRecords( 'postType', 'wsuwp_hrs_courses', latestCoursesQuery ),
	};
} )( LatestCoursesEdit );
