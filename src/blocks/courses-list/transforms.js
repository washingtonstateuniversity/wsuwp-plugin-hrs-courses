/**
 * WordPress dependencies
 */
const { createBlock } = wp.blocks;

/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name } = metadata;

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'hrscourses/list-courses' ],
			transform: ( attributes ) =>
				createBlock( name, attributes )
		},
	],
};

export default transforms;
