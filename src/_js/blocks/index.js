/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import * as coursedate from './coursedate';
import * as courselocation from './courselocation';

/**
 * Function to register WSUWP HRS Courses blocks.
 *
 * @example
 * ```js
 * import { registerHelpDocBlocks } from './blocks';
 *
 * registerHelpDocBlocks();
 * ```
 */
export const registerCoursesBlocks = () => {
	[
		coursedate,
		courselocation,
	].forEach( ( block ) => {
		if ( ! block ) {
			return;
		}
		const { settings, name } = block;
		registerBlockType( name, settings );
	} );
};
