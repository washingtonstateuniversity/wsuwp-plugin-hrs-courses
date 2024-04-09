<?php
/**
 * Block registration functions.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.4.0
 */

namespace WSUWP\HRS\Courses\Blocks;

use WSUWP\HRS\Courses\Blocks\CoursesList;

/**
 * Retrieves the block registration file from every dynamic block.
 *
 * Block registration is managed on a block-by-block basis in 'blocks' directory
 * (`src/blocks/{block-name}/index.php`) for dynamic blocks. Each dynamic
 * block includes an 'index.php' file that handles registration and the render
 * callback function. Because these are dynamic blocks they don’t use default
 * block save implementation through the JS client. Instead they use a server
 * component to render the output. @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/ Documentation on dynamic blocks.
 *
 * @since 0.3.0
 */
function register_dynamic_blocks() {
	$blocks_dir = dirname( __DIR__ ) . '/build/blocks/';
	if ( ! file_exists( $blocks_dir ) ) {
		return;
	}

	$block_names = array(
		'list-courses.php' => 'hrscourses/list-courses',
		'courses-list.php' => 'hrscourses/courses-list',
	);

	foreach ( $block_names as $file => $block_name ) {
		if ( ! file_exists( $blocks_dir . $file ) ) {
			continue;
		}

		require $blocks_dir . $file;
	}
}
add_action( 'init', __NAMESPACE__ . '\register_dynamic_blocks' );

/**
 * Creates a new instance of the `CoursesList` class.
 *
 * @since 0.5.0
 *
 * @return CoursesList An instance of the CoursesList class.
 */
add_action(
	'init',
	function () {
		return new CoursesList\CoursesList();
	},
	25
);
