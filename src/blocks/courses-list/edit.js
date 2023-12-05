/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	CheckboxControl,
	PanelBody,
	Placeholder,
	QueryControls,
	RadioControl,
	RangeControl,
	Spinner,
	ToggleControl,
	ToolbarGroup,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { dateI18n, format, getSettings } from '@wordpress/date';
import {
	InspectorControls,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { pin, list, grid } from '@wordpress/icons';
import { useEntityRecords } from '@wordpress/core-data';
import { store as noticeStore } from '@wordpress/notices';
import { useInstanceId } from '@wordpress/compose';
import { createInterpolateElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	COURSE_TAGS_SLUG,
	LEARNING_PROGRAMS_SLUG,
	MIN_EXCERPT_LENGTH,
	MAX_EXCERPT_LENGTH,
	MAX_POSTS_COLUMNS,
	TERMS_LIST_QUERY,
} from './constants';

export default function CoursesListEdit( { attributes, setAttributes } ) {
	const instanceId = useInstanceId( CoursesListEdit );
	const {
		columns,
		displayPostContentRadio,
		displayPostContent,
		displayPostDate,
		postLayout,
		order,
		orderBy,
		courseTags,
		learningPrograms,
		postsToShow,
		excerptLength,
	} = attributes;

	const coursesQuery = Object.fromEntries(
		Object.entries( {
			course_tag: courseTags,
			learning_program: learningPrograms,
			order,
			orderby: orderBy,
			per_page: postsToShow,
		} ).filter( ( [ , value ] ) => typeof value !== 'undefined' )
	);

	const { records: courses, isResolving: isResolvingCourses } =
		useEntityRecords( 'postType', 'wsuwp_hrs_courses', coursesQuery );

	const courseTagsList = useEntityRecords(
		'taxonomy',
		COURSE_TAGS_SLUG,
		TERMS_LIST_QUERY
	);

	const learningProgramsList = useEntityRecords(
		'taxonomy',
		LEARNING_PROGRAMS_SLUG,
		TERMS_LIST_QUERY
	);

	const courseTagSuggestions =
		courseTagsList?.records?.reduce(
			( accumulator, courseTag ) => ( {
				...accumulator,
				[ courseTag.name ]: courseTag,
			} ),
			{}
		) ?? {};

	const learningProgramSuggestions =
		learningProgramsList?.records?.reduce(
			( accumulator, learningProgram ) => ( {
				...accumulator,
				[ learningProgram.name ]: learningProgram,
			} ),
			{}
		) ?? {};

	// If a user clicks to a link prevent redirection and show a warning.
	const { createWarningNotice, removeNotice } = useDispatch( noticeStore );
	let noticeId;
	const showRedirectionPreventedNotice = ( event ) => {
		event.preventDefault();
		// Remove previous warning if any, to show one at a time per block.
		removeNotice( noticeId );
		noticeId = `block-library/hrscourses/courses-list/redirection-prevented/${ instanceId }`;
		createWarningNotice( __( 'Links are disabled in the editor.' ), {
			id: noticeId,
			type: 'snackbar',
		} );
	};

	const selectCourseTags = ( termId ) => {
		const allCourseTags = ! courseTags.includes( termId )
			? [ ...courseTags, termId ]
			: courseTags.filter( ( value ) => value !== termId );
		if ( allCourseTags.includes( null ) ) {
			return false;
		}
		setAttributes( { courseTags: allCourseTags } );
	};

	const selectLearningPrograms = ( termId ) => {
		const allLearningPrograms = ! learningPrograms.includes( termId )
			? [ ...learningPrograms, termId ]
			: learningPrograms.filter( ( value ) => value !== termId );
		if ( allLearningPrograms.includes( null ) ) {
			return false;
		}
		setAttributes( { learningPrograms: allLearningPrograms } );
	};

	const dateFormat = getSettings().formats.date;

	const hasCourses = !! courses?.length;

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
							__nextHasNoMarginBottom={ true }
							__next40pxDefaultSize={ true }
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
			<PanelBody title={ __( 'Post meta' ) }>
				<ToggleControl
					__nextHasNoMarginBottom={ true }
					label={ __( 'Display date' ) }
					checked={ displayPostDate }
					onChange={ ( value ) =>
						setAttributes( { displayPostDate: value } )
					}
				/>
			</PanelBody>

			<PanelBody title={ __( 'Order and number' ) } initialOpen={ false }>
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
						__nextHasNoMarginBottom={ true }
						__next40pxDefaultSize
						label={ __( 'Maximum columns' ) }
						value={ columns }
						onChange={ ( value ) =>
							setAttributes( { columns: value } )
						}
						min={ 2 }
						max={
							! hasCourses
								? MAX_POSTS_COLUMNS
								: Math.min( MAX_POSTS_COLUMNS, courses.length )
						}
						required
					/>
				) }
			</PanelBody>
			<PanelBody
				title={ __( 'Learning programs' ) }
				initialOpen={ false }
			>
				<ul className="edit__checklist">
					{ learningProgramSuggestions &&
						Object.values( learningProgramSuggestions ).map(
							( term ) => (
								<li key={ term.id }>
									<CheckboxControl
										label={ term.name }
										checked={
											!! learningPrograms?.includes(
												term.id
											)
										}
										onChange={ () =>
											selectLearningPrograms( term.id )
										}
									/>
								</li>
							)
						) }
				</ul>
			</PanelBody>
			<PanelBody title={ __( 'Course tags' ) } initialOpen={ false }>
				<ul className="edit__checklist">
					{ courseTagSuggestions &&
						Object.values( courseTagSuggestions ).map( ( term ) => (
							<li key={ term.id }>
								<CheckboxControl
									label={ term.name }
									checked={
										!! courseTags?.includes( term.id )
									}
									onChange={ () =>
										selectCourseTags( term.id )
									}
								/>
							</li>
						) ) }
				</ul>
			</PanelBody>
		</InspectorControls>
	);

	const blockProps = useBlockProps( {
		className: classnames( {
			'wp-block-hrscourses-courses-list': true,
			'is-grid': postLayout === 'grid',
			'has-date': displayPostDate,
			'has-full-content':
				displayPostContent && displayPostContentRadio === 'full_post',
			'has-excerpt':
				displayPostContent && displayPostContentRadio === 'excerpt',
			[ `columns-${ columns }` ]: postLayout === 'grid',
		} ),
	} );

	if ( ! hasCourses ) {
		return (
			<div { ...blockProps }>
				{ inspectorControls }
				<Placeholder icon={ pin } label={ __( 'Courses' ) }>
					{ isResolvingCourses ? (
						<Spinner />
					) : (
						__( 'No courses found.' )
					) }
				</Placeholder>
			</div>
		);
	}

	// Removing posts from display should be instant.
	const displayCourses =
		courses.length > postsToShow
			? courses.slice( 0, postsToShow )
			: courses;

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
			<ul { ...blockProps }>
				{ displayCourses.map( ( course ) => {
					const titleTrimmed = course.title.rendered.trim();
					let excerpt =
						course.content.raw
							.trim()
							.match(
								/<!-- wp:paragraph {"placeholder":"Describe the course…"} -->\n?<p>(.*?)<\/p>/
							) ?? '';

					const excerptElement = document.createElement( 'div' );
					excerptElement.innerHTML = excerpt[ 1 ] ?? '';

					excerpt =
						excerptElement.textContent ||
						excerptElement.innerText ||
						'';

					const needsReadMore =
						excerptLength < excerpt.trim().split( ' ' ).length &&
						course.excerpt.raw === '';

					const postExcerpt = needsReadMore ? (
						<>
							{ excerpt
								.trim()
								.split( ' ', excerptLength )
								.join( ' ' ) }
							{ createInterpolateElement(
								sprintf(
									/* translators: 1: Hidden accessibility text: Post title */
									__(
										'… <a>Learn more<span>: %1$s</span></a>'
									),
									titleTrimmed || __( '(no title)' )
								),
								{
									a: (
										// eslint-disable-next-line jsx-a11y/anchor-has-content
										<a
											className="wp-block-hrscourses-courses-list__read-more"
											href={ course.link }
											rel="noopener noreferrer"
											onClick={
												showRedirectionPreventedNotice
											}
										/>
									),
									span: (
										<span className="screen-reader-text" />
									),
								}
							) }
						</>
					) : (
						excerpt
					);

					return (
						<li key={ course.id }>
							<h3 className="wp-block-hrscourses-courses-list--heading">
								<a
									href={ course.link }
									rel="noreferrer noopener"
									dangerouslySetInnerHTML={
										!! titleTrimmed
											? {
													__html: titleTrimmed,
											  }
											: undefined
									}
									onClick={ showRedirectionPreventedNotice }
								>
									{ ! titleTrimmed
										? __( '(no title)' )
										: null }
								</a>
							</h3>
							{ displayPostContent &&
								displayPostContentRadio === 'excerpt' && (
									<p className="wp-block-hrscourses-courses-list--post-excerpt">
										{ postExcerpt }
									</p>
								) }
							{ displayPostContent &&
								displayPostContentRadio === 'full_post' && (
									<div
										className="wp-block-hrscourses-courses-list--post-full-content"
										dangerouslySetInnerHTML={ {
											__html: course.content.raw.trim(),
										} }
									/>
								) }
							{ displayPostDate && course.modified_gmt && (
								<p className="wp-block-hrscourses-courses-list--post-date">
									{ __( 'Updated on ' ) }
									<time
										dateTime={ format(
											'c',
											course.modified_gmt
										) }
									>
										{ dateI18n(
											dateFormat,
											course.modified_gmt
										) }
									</time>
								</p>
							) }
						</li>
					);
				} ) }
			</ul>
		</>
	);
}
