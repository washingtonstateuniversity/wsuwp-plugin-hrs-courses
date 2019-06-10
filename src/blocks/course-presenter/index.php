<?php
/**
 * Server-side rendering of the `hrscourses/course-presenter` block.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.4.0
 */
namespace WSUWP\HRS\Courses\Blocks\course_presenter;
use WSUWP\HRS\Courses\Setup;

/**
 * Renders the `hrscourses/course-presenter` dynamic block contents.
 *
 * @since 0.4.0
 *
 * @param array $attributes Optional. An array of block attributes passed from `register_block_type`.
 *
 * @return string The formatted HTML for display.
 */
function render_block_course_presenter( $attributes ) {
	$presenter = get_post_meta( get_the_ID(), '_wsuwp_hrs_courses_presenter', true );

	if ( ! $presenter ) {
		return;
	}

	$block_content = sprintf(
		'<p class="wp-block-hrscourses-course-presenter"><span class="label">%1s</span> %2$s</p>',
		__( 'Presenter:', 'wsuwp-hrs-courses' ),
		$presenter
	);

	return $block_content;
}

/**
 * Registers the `hrscourses/course-presenter` block on the server.
 *
 * @since 0.4.0
 */
function register_block_course_presenter() {
	register_block_type(
		'hrscourses/course-presenter',
		array(
			'render_callback' => __NAMESPACE__ . '\render_block_course_presenter',
		)
	);
}
// Use later priority to make sure required resources are ready.
add_action( 'init', __NAMESPACE__ . '\register_block_course_presenter', 25 );
