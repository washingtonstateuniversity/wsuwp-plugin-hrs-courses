<?php
/**
 * Server-side rendering of the `hrscourses/course-datetime` block.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.4.0
 */
namespace WSUWP\HRS\Courses\Blocks\course_datetime;
use WSUWP\HRS\Courses\Setup;

/**
 * Renders the `hrscourses/course-datetime` dynamic block contents.
 *
 * @since 0.4.0
 *
 * @param array $attributes Optional. An array of block attributes passed from `register_block_type`.
 *
 * @return string The formatted HTML for display.
 */
function render_block_course_datetime( $attributes ) {
	$datetime = get_post_meta( get_the_ID(), '_wsuwp_hrs_courses_datetime', true );

	if ( ! $datetime ) {
		return;
	}

	$block_content = sprintf(
		'<p class="wp-block-hrscourses-course-datetime"><span class="label">%1$s</span> %2$s</p>',
		__( 'Date:', 'wsuwp-hrs-courses' ),
		$datetime
	);

	return $block_content;
}

/**
 * Registers the `hrscourses/course-datetime` block on the server.
 *
 * @since 0.4.0
 */
function register_block_course_datetime() {
	register_block_type(
		'hrscourses/course-datetime',
		array(
			'render_callback' => __NAMESPACE__ . '\render_block_course_datetime',
		)
	);
}
// Use later priority to make sure required resources are ready.
add_action( 'init', __NAMESPACE__ . '\register_block_course_datetime', 25 );
