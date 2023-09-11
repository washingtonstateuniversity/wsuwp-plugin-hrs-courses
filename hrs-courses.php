<?php
/**
 * Plugin Name: WSUWP HRS Courses
 * Version: 2.2.0-rc.1
 * Description: A plugin to create a Course custom post type for WSU Human Resource Services.
 * Author: Adam Turner, washingtonstateuniversity
 * Author URI: https://hrs.wsu.edu/
 * Plugin URI: https://github.com/washingtonstateuniversity/wsuwp-plugin-hrs-courses
 * Update URI: https://api.github.com/repos/washingtonstateuniversity/wsuwp-plugin-hrs-courses/releases/latest
 * Text Domain: wsuwp-hrs-courses
 * Requires at least: 5.7
 * Tested up to: 6.3.1
 * Requires PHP: 7.0
 *
 * @package WSUWP_HRS_Courses
 */

namespace WSUWP\HRS\Courses;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Starts things up.
pre_init();

if ( false !== verify_wp_version() ) {
	// Flush rules on activation and clean up on deactivation.
	register_activation_hook( __FILE__, array( __NAMESPACE__ . '\Setup\WSUWP_HRS_Courses', 'hrs_courses_activate' ) );
	register_deactivation_hook( __FILE__, array( __NAMESPACE__ . '\Setup\WSUWP_HRS_Courses', 'hrs_courses_deactivate' ) );
	register_uninstall_hook( __FILE__, array( __NAMESPACE__ . '\Setup\WSUWP_HRS_Courses', 'hrs_courses_uninstall' ) );
}

/**
 * Displays a WP version notice.
 *
 * @since 1.4.0
 */
function wordpress_version_notice() {
	printf(
		'<div class="error"><p>%s</p></div>',
		esc_html__( 'The HRS Courses plugin requires WordPress 5.7.0 or later to function properly. Please upgrade WordPress before activating.', 'wsuwp-hrs-courses' )
	);
}

/**
 * Displays a required dependencies notice.
 *
 * @since 1.4.0
 */
function plugin_deps_notice() {
	printf(
		'<div class="error"><p>%s</p></div>',
		esc_html__( 'The HRS Courses plugin requires the HRSWP Blocks plugin to function properly. Please install before activating.', 'wsuwp-hrs-courses' )
	);
}

/**
 * Verifies required WordPress version.
 *
 * @since 1.4.0
 *
 * @return bool True if WordPress dependencies are met, false if not.
 */
function verify_wp_version() {
	global $wp_version;

	// Get unmodified $wp_version.
	include ABSPATH . WPINC . '/version.php';

	// Remove '-src' from the version string for `version_compare()`.
	$version = ( strpos( '-src', $wp_version ) )
		? str_replace( '-src', '', $wp_version )
		: preg_replace( '/-[A-Za-z-0-9]*$/', '.0', $wp_version );

	if ( version_compare( $version, '5.7.0', '<' ) ) {
		return false;
	}

	return true;
}

/**
 * Verifies plugin dependencies.
 *
 * @since 1.4.0
 *
 * @return bool True if all dependencies are met, false if not.
 */
function verify_plugin_deps() {
	// Check for @deprecated class names for back compat.
	if ( class_exists( 'HRSWP\Blocks\Setup' ) || class_exists( 'HRSWP\Blocks\Setup\Setup' ) ) {
		return true;
	}

	if (
		in_array(
			'hrswp-plugin-blocks/hrswp-blocks.php',
			apply_filters( 'active_plugins', get_option( 'active_plugins' ) ),
			true
		)
	) {
		return true;
	}

	return false;
}

/**
 * Verifies WP version dependency and then loads.
 *
 * @since 1.4.0
 */
function pre_init() {
	if ( false === verify_wp_version() ) {
		add_action( 'admin_notices', __NAMESPACE__ . '\wordpress_version_notice' );
	}

	require __DIR__ . '/includes/class-wsuwp-hrs-courses.php';
	add_action( 'plugins_loaded', __NAMESPACE__ . '\load_hrs_courses' );
}

/**
 * Creates an instance of the HRS Courses class.
 *
 * @since 0.1.0
 *
 * @return WSUWP_HRS_Courses An instance of the WSUWP_HRS_Courses class.
 */
function load_hrs_courses() {
	// Must check after 'plugins_loaded'.
	if ( false === verify_plugin_deps() ) {
		add_action( 'admin_notices', __NAMESPACE__ . '\plugin_deps_notice' );
	}

	$wsuwp_hrs_courses = Setup\WSUWP_HRS_Courses::get_instance( __FILE__ );

	return $wsuwp_hrs_courses;
}
