/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const {
	name,
	category,
	supports,
} = metadata;

export { name };

export const settings = {
	title: __( 'List Courses' ),
	category,
	description: __( 'Display a list of the most recent courses.' ),
	icon: 'location-alt',
	keywords: [ __( 'recent posts' ) ],
	supports,
	edit,
	save,
};
