<?php
/**
 * Server-side rendering of the `hrscourses/course-location` block.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.4.0
 */
namespace WSUWP\HRS\Courses\Blocks\course_location;
use WSUWP\HRS\Courses\Setup;

/**
 * Renders the `hrscourses/course-location` dynamic block contents.
 *
 * @since 0.4.0
 *
 * @param array $attributes Optional. An array of block attributes passed from `register_block_type`.
 *
 * @return string The formatted HTML for display.
 */
function render_block_course_location( $attributes ) {
	$location = get_post_meta( get_the_ID(), '_wsuwp_hrs_courses_location', true );

	if ( ! $location ) {
		return;
	}

	$block_content = sprintf(
		'<p class="wp-block-hrscourses-course-location"><span class="label">%1$s</span> %2$s</p>',
		__( 'Location:', 'wsuwp-hrs-courses' ),
		$location
	);

	return $block_content;
}

/**
 * Registers the `hrscourses/course-location` block on the server.
 *
 * @since 0.4.0
 */
function register_block_course_location() {
	register_block_type(
		'hrscourses/course-location',
		array(
			'render_callback' => __NAMESPACE__ . '\render_block_course_location',
		)
	);
}
// Use later priority to make sure required resources are ready.
add_action( 'init', __NAMESPACE__ . '\register_block_course_location', 25 );
