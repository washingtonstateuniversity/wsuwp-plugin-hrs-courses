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
	title: __( 'Course Date and Time' ),
	category,
	description: __( 'The date and/or time of the course.' ),
	icon: 'calendar-alt',
	keywords: [ __( 'courses' ) ],
	attributes,
	supports,
	edit,
	save,
};
