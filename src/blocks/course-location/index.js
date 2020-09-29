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

const { name, category, attributes, supports } = metadata;

export { name };

export const settings = {
	title: __( 'Course Location' ),
	category,
	description: __( 'The meeting location of the course.' ),
	icon: 'location-alt',
	keywords: [ __( 'location' ) ],
	attributes,
	supports,
	edit,
	save,
};
