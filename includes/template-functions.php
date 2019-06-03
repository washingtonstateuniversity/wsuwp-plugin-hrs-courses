<?php
/**
 * WSUWP HRS Courses template functions.
 *
 * Functions to modify WordPress defaults using hooks.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.4.0
 */
namespace WSUWP\HRS\Courses\Templates;
use WSUWP\HRS\Courses\Setup;

/**
 * Loads custom templates for Courses display.
 *
 * @since 0.4.0
 *
 * @param string $template Path to the template. See locate_template().
 * @return string Path to the custom template.
 */
function load_template( $template ) {
	if ( is_tax( 'learning_program' ) || is_tax( 'course_tag' ) ) {
		$template = dirname( __DIR__ ) . '/templates/archive.php';
	}

	if ( is_post_type_archive( Setup\WSUWP_HRS_Courses::$post_type_slug ) ) {
		$template = dirname( __DIR__ ) . '/templates/archive.php';
	}

	return $template;
}
add_filter( 'taxonomy_template', __NAMESPACE__ . '\load_template' );
add_filter( 'archive_template', __NAMESPACE__ . '\load_template' );
