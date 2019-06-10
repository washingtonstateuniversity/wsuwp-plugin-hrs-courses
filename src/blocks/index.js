/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import * as courseDate from './course-datetime';
import * as courseLocation from './course-location';
import * as coursePresenter from './course-presenter';
import * as courseVideo from './course-video';
import * as courseOnline from './course-online';
import * as latestCourses from './latest-courses';

/**
 * Function to register WSUWP HRS Courses blocks.
 *
 * @example
 * ```js
 * import { registerCoursesBlocks } from './blocks';
 *
 * registerCoursesBlocks();
 * ```
 */
export const registerCoursesBlocks = () => {
	[
		courseDate,
		courseLocation,
		coursePresenter,
		courseVideo,
		courseOnline,
		latestCourses,
	].forEach( ( block ) => {
		if ( ! block ) {
			return;
		}
		const { settings, name } = block;
		registerBlockType( name, settings );
	} );
};
