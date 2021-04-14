/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import { icon } from './icons';

const { name, category, supports } = metadata;

export { name };

export const settings = {
	title: __( 'Courses List' ),
	icon,
	category,
	description: __( 'Display a list of courses.' ),
	keywords: [ __( 'courses' ), __( 'posts' ), __( 'latest courses' ) ],
	supports,
	example: {},
	edit,
};
