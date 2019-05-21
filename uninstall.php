<?php
/**
 * Uninstall HRS Courses
 *
 * Uninstall will remove all options and delete all posts created by the HRS
 * Courses custom post type plugin. Do not need to flush cache/temp or permalinks
 * here, as that will have already been done on deactivation. Uses get_posts()
 * and wp_trash_post() to do the heavy lifting. get_posts() does not return
 * posts with of auto_draft type, however, so currently these methods will not
 * delete any auto drafts from the database.
 *
 * @todo Consider switching to using a $wpdb SQL query to more thoroughly delete
 *       all HRS Courses custom post types.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.1.0
 */
namespace WSUWP\HRS\Courses\Uninstall;
use WSUWP\HRS\Courses\Setup;

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	die;
}

/**
 * Gets post ids of the HRS Courses post types.
 *
 * @since 0.1.0
 *
 * @param int $limit Optional. Limit how many ids are returned. Default 800.
 * @return int[] Array of post ids.
 */
function hrs_get_post_ids( $limit = 800 ) {
	global $post;

	if ( ! absint( $limit ) ) {
		return array();
	}

	$args = array(
		'post_type'   => Setup\WSUWP_HRS_Courses::$post_type_slug,
		'numberposts' => absint( $limit ),
	);

	$hrs_posts = get_posts( $args );

	$ids = array();
	foreach ( $hrs_posts as $p ) {
		$ids[] += $p->ID;
	}

	return $ids;
}

/**
 * Trashes HRS Courses posts.
 *
 * @since 0.1.0
 *
 * @todo Currently only deletes up to the limit specified in
 *       hrs_get_post_ids. Need to find a way to delete more without
 *       introducing timeout errors.
 */
private function delete_hrs_courses_posts() {
	// Get the HRS Courses post ID list
	$id_list = $this->hrs_get_post_ids();

	// Move selected posts to trash
	foreach ( $id_list as $id ) {
		wp_trash_post( $id );
	}
}


function run_uninstaller() {
	// Remove options if not already gone.
	if ( get_option( 'hrs-courses-plugin-activated' ) ) {
		delete_option( 'hrs-courses-plugin-activated' );
	}

	// Delete HRS Courses posts.
	delete_hrs_courses_posts();
}

run_uninstaller();
