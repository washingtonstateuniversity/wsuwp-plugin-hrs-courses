/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

/**
 * Internal dependencies
 */
import { ListTerms } from './list-terms';

export const PostMeta = ( props ) => {
	const {
		displayPostDate,
		displayCourseTag,
		displayLearningProgram,
		post,
		learningPrograms,
		courseTags,
	} = props;

	const dateFormat = __experimentalGetSettings().formats.date;

	return (
		<div className="wp-block-hrswp-posts-list--meta">
			{ displayLearningProgram && learningPrograms && (
				<ListTerms
					post={ post }
					terms={ learningPrograms }
					taxonomySlug={ 'learning_program' }
					prefix={ __( 'Learning Programs: ' ) }
				/>
			) }
			{ displayCourseTag && courseTags && (
				<ListTerms
					post={ post }
					terms={ courseTags }
					taxonomySlug={ 'course_tag' }
					prefix={ __( 'Course Tags: ' ) }
				/>
			) }
			{ displayPostDate && post.date_gmt && (
				<p className="wp-block-hrswp-posts-list--post-date">
					{ __( 'Published on ' ) }
					<time dateTime={ format( 'c', post.date_gmt ) }>
						{ dateI18n( dateFormat, post.date_gmt ) }
					</time>
				</p>
			) }
		</div>
	);
};
