/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

/**
 * Internal dependencies
 */
import { ListTerms } from './list-terms';
import { COURSE_TAGS_SLUG, LEARNING_PROGRAMS_SLUG } from './constants';

export const PostMeta = ( props ) => {
	const {
		displayPostDate,
		displayCourseTag,
		displayLearningProgram,
		courseTags,
		learningPrograms,
		post,
	} = props;

	const dateFormat = __experimentalGetSettings().formats.date;

	return (
		<div className="wp-block-hrscourses-courses-list--meta">
			{ displayLearningProgram && learningPrograms && (
				<ListTerms
					post={ post }
					terms={ learningPrograms }
					taxonomySlug={ LEARNING_PROGRAMS_SLUG }
					prefix={ __( 'Learning Programs: ' ) }
				/>
			) }
			{ displayCourseTag && courseTags && (
				<ListTerms
					post={ post }
					terms={ courseTags }
					taxonomySlug={ COURSE_TAGS_SLUG }
					prefix={ __( 'Course Tags: ' ) }
				/>
			) }
			{ displayPostDate && post.modified_gmt && (
				<p className="wp-block-hrscourses-courses-list--post-date">
					{ __( 'Updated on ' ) }
					<time dateTime={ format( 'c', post.modified_gmt ) }>
						{ dateI18n( dateFormat, post.modified_gmt ) }
					</time>
				</p>
			) }
		</div>
	);
};
