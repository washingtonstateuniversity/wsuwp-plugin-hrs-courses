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

/**
 * Modifies the WP nav menu classes.
 *
 * Hooked using a later priority to allow parent theme to finish its own
 * modifications first.
 *
 * @since 0.4.0
 *
 * @param array    $classes Required. Current list of nav menu item classes.
 * @param WP_Post  $item    Post object representing the menu item data.
 * @param stdClass $args    The arguments used to create the menu.
 * @return string[] Array of CSS classes for the nav menu item.
 */
function modify_nav_menu_classes( $classes, $item, $args ) {
	if ( in_array( $args->menu, array( 'site', 'offsite' ) ) ) {
		// Remove the "active" class from the blog home page for Courses CPT.
		if (
			is_singular( Setup\WSUWP_HRS_Courses::$post_type_slug ) ||
			is_post_type_archive( Setup\WSUWP_HRS_Courses::$post_type_slug ) ||
			is_tax( 'course_tag' ) ||
			is_tax( 'learning_program' )
		) {
			if ( get_option( 'page_for_posts' ) === $item->object_id ) {
				$classes = array();
			}
		}

		// Assign the "active" class to the proper menu item parent for singular course.
		if ( is_singular( Setup\WSUWP_HRS_Courses::$post_type_slug ) && 'post_type_archive' === $item->type ) {
			$classes[] = 'active';
		}
	}

	return $classes;
}
add_filter( 'nav_menu_css_class', __NAMESPACE__ . '\modify_nav_menu_classes', 15, 3 );
