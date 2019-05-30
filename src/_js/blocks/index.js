/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import * as coursedate from './coursedate';
import * as courselocation from './courselocation';
import * as coursepresenter from './coursepresenter';
import * as coursevideo from './coursevideo';
import * as courseonline from './courseonline';

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
		coursedate,
		courselocation,
		coursepresenter,
		coursevideo,
		courseonline,
	].forEach( ( block ) => {
		if ( ! block ) {
			return;
		}
		const { settings, name } = block;
		registerBlockType( name, settings );
	} );
};
