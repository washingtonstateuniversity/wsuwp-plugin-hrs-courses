/**
 * External dependencies
 */
import { invoke, isUndefined, pickBy } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component, RawHTML } = wp.element;
const {
	ExternalLink,
	FormTokenField,
	PanelBody,
	Placeholder,
	QueryControls,
	RadioControl,
	RangeControl,
	Spinner,
	ToggleControl,
	ToolbarGroup,
} = wp.components;
const { __ } = wp.i18n;
const { InspectorControls, BlockControls } = wp.blockEditor;
const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
import { pin, list, grid } from './icons';
import { PostMeta } from './post-meta';
import {
	COURSE_TAGS_SLUG,
	LEARNING_PROGRAMS_SLUG,
	MIN_EXCERPT_LENGTH,
	MAX_EXCERPT_LENGTH,
	MAX_POSTS_COLUMNS,
	TERMS_LIST_QUERY,
} from './constants';
import {
	getExistingTermsFormTokenValue,
	getTermsInfo,
	onTermsChange,
} from './utils';

class PostsListEdit extends Component {
	render() {
		const {
			attributes,
			setAttributes,
			className,
			postsList,
			courseTagTerms,
			learningProgramTerms,
		} = this.props;
		const {
			displayCourseTag,
			displayLearningProgram,
			displayPostContentRadio,
			displayPostContent,
			displayPostDate,
			postLayout,
			columns,
			order,
			orderBy,
			selectedTermLists,
			postsToShow,
			excerptLength,
		} = attributes;

		const learningPrograms = getTermsInfo( learningProgramTerms );
		const courseTags = getTermsInfo( courseTagTerms );

		const onLearningProgramsChange = onTermsChange(
			learningPrograms,
			'learningProgramIds',
			selectedTermLists,
			setAttributes
		);
		const onCourseTagsChange = onTermsChange(
			courseTags,
			'courseTagIds',
			selectedTermLists,
			setAttributes
		);

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Course content settings' ) }>
					<ToggleControl
						label={ __( 'Course content' ) }
						checked={ displayPostContent }
						onChange={ ( value ) =>
							setAttributes( { displayPostContent: value } )
						}
					/>
					{ displayPostContent && (
						<RadioControl
							label={ __( 'Show:' ) }
							selected={ displayPostContentRadio }
							options={ [
								{ label: __( 'Excerpt' ), value: 'excerpt' },
								{
									label: __( 'Full content' ),
									value: 'full_post',
								},
							] }
							onChange={ ( value ) =>
								setAttributes( {
									displayPostContentRadio: value,
								} )
							}
						/>
					) }
					{ displayPostContent &&
						displayPostContentRadio === 'excerpt' && (
							<RangeControl
								label={ __( 'Max number of words in excerpt' ) }
								value={ excerptLength }
								onChange={ ( value ) =>
									setAttributes( { excerptLength: value } )
								}
								min={ MIN_EXCERPT_LENGTH }
								max={ MAX_EXCERPT_LENGTH }
							/>
						) }
				</PanelBody>

				<PanelBody title={ __( 'Post meta settings' ) }>
					<ToggleControl
						label={ __( 'Display date' ) }
						checked={ displayPostDate }
						onChange={ ( value ) =>
							setAttributes( { displayPostDate: value } )
						}
					/>
					<ToggleControl
						label={ __( 'Display learning programs' ) }
						checked={ displayLearningProgram }
						onChange={ ( value ) =>
							setAttributes( { displayLearningProgram: value } )
						}
					/>
					<ToggleControl
						label={ __( 'Display course tags' ) }
						checked={ displayCourseTag }
						onChange={ ( value ) =>
							setAttributes( { displayCourseTag: value } )
						}
					/>
				</PanelBody>

				<PanelBody
					className={ `${ className } taxonomy-filter` }
					title={ __( 'Filtering' ) }
					initialOpen={ false }
				>
					{ learningPrograms?.terms?.length > 0 && (
						<FormTokenField
							label={ __( 'Learning Programs' ) }
							value={ getExistingTermsFormTokenValue(
								LEARNING_PROGRAMS_SLUG,
								learningPrograms,
								selectedTermLists
							) }
							suggestions={ learningPrograms.names }
							onChange={ onLearningProgramsChange }
						/>
					) }
					{ courseTags?.terms?.length > 0 && (
						<FormTokenField
							label={ __( 'Course Tags' ) }
							value={ getExistingTermsFormTokenValue(
								COURSE_TAGS_SLUG,
								courseTags,
								selectedTermLists
							) }
							suggestions={ courseTags.names }
							onChange={ onCourseTagsChange }
						/>
					) }
					<p className={ 'components-filter-control__help' }>
						{ __(
							'Filtering by both Learning Program and Course Tag will return only courses that have both terms assigned.'
						) }
						<ExternalLink
							href={
								'https://hrscms.hrs.wsu.edu/component-library/courses-list/#filtering-and-sorting-options'
							}
						>
							{ __( 'Learn more about filtering' ) }
						</ExternalLink>
					</p>
				</PanelBody>

				<PanelBody
					title={ __( 'Order and number' ) }
					initialOpen={ false }
				>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						onOrderChange={ ( value ) =>
							setAttributes( { order: value } )
						}
						onOrderByChange={ ( value ) =>
							setAttributes( { orderBy: value } )
						}
						onNumberOfItemsChange={ ( value ) =>
							setAttributes( { postsToShow: value } )
						}
					/>

					{ postLayout === 'grid' && (
						<RangeControl
							label={ __( 'Maximum columns' ) }
							value={ columns }
							onChange={ ( value ) =>
								setAttributes( { columns: value } )
							}
							min={ 2 }
							max={
								! hasPosts
									? MAX_POSTS_COLUMNS
									: Math.min(
											MAX_POSTS_COLUMNS,
											postsList.length
									  )
							}
							required
						/>
					) }
				</PanelBody>
			</InspectorControls>
		);

		const hasPosts = Array.isArray( postsList ) && postsList.length;
		if ( ! hasPosts ) {
			return (
				<>
					{ inspectorControls }
					<Placeholder icon={ pin } label={ __( 'Courses' ) }>
						{ ! Array.isArray( postsList ) ? (
							<Spinner />
						) : (
							__( 'No courses found.' )
						) }
					</Placeholder>
				</>
			);
		}

		// Removing posts from display should be instant.
		const displayPosts =
			postsList.length > postsToShow
				? postsList.slice( 0, postsToShow )
				: postsList;

		const layoutControls = [
			{
				icon: list,
				title: __( 'List view' ),
				onClick: () => setAttributes( { postLayout: 'list' } ),
				isActive: postLayout === 'list',
			},
			{
				icon: grid,
				title: __( 'Grid view' ),
				onClick: () => setAttributes( { postLayout: 'grid' } ),
				isActive: postLayout === 'grid',
			},
		];

		return (
			<>
				{ inspectorControls }
				<BlockControls>
					<ToolbarGroup controls={ layoutControls } />
				</BlockControls>
				<div
					className={ classnames( className, {
						'is-grid': postLayout === 'grid',
						'has-date': displayPostDate,
						'has-full-content':
							displayPostContent &&
							displayPostContentRadio === 'full_post',
						'has-excerpt':
							displayPostContent &&
							displayPostContentRadio === 'excerpt',
						[ `columns-${ columns }` ]: postLayout === 'grid',
					} ) }
				>
					{ displayPosts.map( ( post, i ) => {
						const titleTrimmed = invoke( post, [
							'title',
							'rendered',
							'trim',
						] );

						let excerpt = post.content.rendered;
						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;
						excerpt =
							excerptElement.textContent ||
							excerptElement.innerText ||
							'';

						const hasPostMeta =
							displayPostDate ||
							displayLearningProgram ||
							displayCourseTag;

						const needsReadMore =
							excerptLength <
								excerpt.trim().split( ' ' ).length &&
							post.excerpt.raw === '';

						const postExcerpt = needsReadMore ? (
							<>
								{ excerpt
									.trim()
									.split( ' ', excerptLength )
									.join( ' ' ) }
								{ /* translators: excerpt truncation character, default …  */ }
								{ __( ' … ' ) }
							</>
						) : (
							excerpt
						);

						return (
							<div
								className="wp-block-hrscourses-courses-list--list-item"
								key={ i }
							>
								<div className="wp-block-hrscourses-courses-list--body">
									<h3 className="wp-block-hrscourses-courses-list--heading">
										<a
											href={ post.link }
											target="_blank"
											rel="noreferrer noopener"
										>
											{ titleTrimmed ? (
												<RawHTML>
													{ titleTrimmed }
												</RawHTML>
											) : (
												__( '(no title)' )
											) }
										</a>
									</h3>
									{ displayPostContent &&
										displayPostContentRadio ===
											'excerpt' && (
											<p className="wp-block-hrscourses-courses-list--post-excerpt">
												{ postExcerpt }
											</p>
										) }
									{ displayPostContent &&
										displayPostContentRadio ===
											'full_post' && (
											<div className="wp-block-hrscourses-courses-list--post-full-content">
												<RawHTML key="html">
													{ post.content.raw.trim() }
												</RawHTML>
											</div>
										) }

									{ hasPostMeta && (
										<PostMeta
											displayPostDate={ displayPostDate }
											displayCourseTag={
												displayCourseTag
											}
											displayLearningProgram={
												displayLearningProgram
											}
											post={ post }
											learningPrograms={
												learningPrograms
											}
											courseTags={ courseTags }
										/>
									) }
								</div>
							</div>
						);
					} ) }
				</div>
			</>
		);
	}
}

export default withSelect( ( select, props ) => {
	const { postsToShow, order, orderBy, selectedTermLists } = props.attributes;
	const { getEntityRecords } = select( 'core' );

	const postsListQuery = pickBy(
		{
			order,
			orderby: orderBy,
			per_page: postsToShow,
		},
		( value ) => ! isUndefined( value )
	);

	if ( selectedTermLists?.learningProgramIds?.length > 0 ) {
		postsListQuery[ LEARNING_PROGRAMS_SLUG ] =
			selectedTermLists.learningProgramIds;
	}
	if ( selectedTermLists?.courseTagIds?.length > 0 ) {
		postsListQuery[ COURSE_TAGS_SLUG ] = selectedTermLists.courseTagIds;
	}

	const posts = getEntityRecords(
		'postType',
		'wsuwp_hrs_courses',
		postsListQuery
	);
	const courseTagTerms = getEntityRecords(
		'taxonomy',
		COURSE_TAGS_SLUG,
		TERMS_LIST_QUERY
	);
	const learningProgramTerms = getEntityRecords(
		'taxonomy',
		LEARNING_PROGRAMS_SLUG,
		TERMS_LIST_QUERY
	);

	return {
		courseTagTerms,
		learningProgramTerms,
		postsList: ! Array.isArray( posts )
			? posts
			: posts.map( ( post ) => post ),
	};
} )( PostsListEdit );
