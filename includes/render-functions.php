<?php
/**
 * WSUWP HRS Courses render functions.
 *
 * Handles formatting and printing.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.3.0
 */
namespace WSUWP\HRS\Courses\Render;
use WSUWP\HRS\Courses\Setup;

/**
 * Sanitizes a block name.
 *
 * Cleans up a block name to allow it to be used in a PHP function name.
 * Only lowercase alphanumeric characters and underscores are allowed; all other
 * characters are converted to underscores.
 *
 * @since 0.3.0
 *
 * @param string $name Required. The block name to sanitize.
 * @return string The sanitized block name.
 */
function sanitize_block_name( $name ) {
	$raw_name = $name;
	$name     = strtolower( $name );
	$name     = preg_replace( '/[^a-z0-9_]/', '_', $name );

	/**
	 * Filters a sanitized block name string.
	 *
	 * @since 0.3.0
	 *
	 * @param string $name     The sanitized block name.
	 * @param string $raw_name The name prior to sanitization.
	 */
	return apply_filters( 'wsuwp_hrs_courses_sanitize_block_name', $name, $raw_name );
}

/**
 * Renders the HRS Courses datetime post meta for display.
 *
 * @since 0.3.0
 *
 * @param array $attributes Optional. An array of block attributes passed from `register_block_type`.
 * @param array $content    Optional. Content value(s) passed from `register_block_type`.
 * @return string The formatted HTML for display.
 */
function render_block_hrscourses_course_date_time( $attributes, $content ) {
	$datetime = get_post_meta( get_the_ID(), '_wsuwp_hrs_courses_datetime', true );

	if ( $datetime ) {
		return sprintf( '<p class="wp-block-hrscourses-course-date-time">%s</p>', $datetime );
	}

	return;
}

/**
 * Renders the HRS Courses location post meta for display.
 *
 * @since 0.3.0
 *
 * @param array $attributes Optional. An array of block attributes passed from `register_block_type`.
 * @param array $content    Optional. Content value(s) passed from `register_block_type`.
 * @return string The formatted HTML for display.
 */
function render_block_hrscourses_course_location( $attributes, $content ) {
	$post_id   = get_the_ID();
	$location  = get_post_meta( $post_id, '_wsuwp_hrs_courses_location', true );
	$is_online = get_post_meta( $post_id, '_wsuwp_hrs_courses_is_online', true );
	$url       = get_post_meta( $post_id, '_wsuwp_hrs_courses_online', true );

	if ( $location ) {
		$location_string = sprintf( '<p class="course-location">%s</p>', $location );
	}

	if ( $is_online && $url ) {
		$url_string = sprintf( '<p class="course-url"><a href="%1$s">%2$s</a></p>', esc_url( $url ), __( 'View course online', 'wsuwp-hrs-courses' ) );
	}

	return sprintf(
		'<div class="wp-block-hrscourses-course-location">%1$s%2$s</div>',
		( ! empty( $location_string ) ) ? $location_string : '',
		( ! empty( $url_string ) ) ? $url_string : ''
	);
}
