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
import * as coursesList from './courses-list';

const courseBlocks = [
	courseDate,
	courseLocation,
	coursePresenter,
	courseVideo,
	courseOnline,
	coursesList,
];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;
	registerBlockType( name, {
		...metadata,
		...settings,
	} );
};

/**
 * Function to register plugin blocks.
 *
 * @example
 * ```js
 * import { registerBlocks } from './blocks';
 *
 * registerBlocks();
 * ```
 */
export const registerBlocks = () => {
	courseBlocks.forEach( registerBlock );
};
