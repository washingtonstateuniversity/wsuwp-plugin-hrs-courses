<?php
/**
 * WSUWP HRS Courses Registration: WSU_HRS_Courses class
 *
 * @package WSUWP_HRS_Courses
 * @since 0.1.0
 */
namespace WSUWP\HRS\Courses\Setup;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * The WSUWP HRS Courses setup class.
 *
 * @since 0.1.0
 */
class WSUWP_HRS_Courses {
	/**
	 * Slug used to register the post type.
	 *
	 * @since 0.1.0
	 *
	 * @var string
	 */
	public static $post_type_slug = 'wsuwp_hrs_courses';

	/**
	 * The plugin basename.
	 *
	 * @since 0.1.0
	 *
	 * @var string
	 */
	private $basename;

	/**
	 * Instantiates HRS Courses singleton.
	 *
	 * @since 0.1.0
	 *
	 * @return object The HRS Courses object
	 */
	public static function get_instance( $file ) {
		static $instance = null;

		// Only set up and activate the plugin if it hasn't already been done.
		if ( null === $instance ) {
			$instance = new WSUWP_HRS_Courses();
			$instance->setup_hooks();
			$instance->basename = $file;
			//$instance->includes();

		}

		return $instance;
	}

	/**
	 * An empty constructor to prevent HRS Courses being loaded more than once.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		/* Nothing doing. */
	}

	/**
	 * Includes the required files.
	 *
	 * @since 0.1.0
	 *
	 * @access private
	 */
	private function includes() {
		// The plugin templating functions.
		require __DIR__ . '/template-tags.php';
	}

	/**
	 * Loads the WP API actions and hooks.
	 *
	 * @since 0.1.0
	 *
	 * @access private
	 */
	private function setup_hooks() {
		add_action( 'init', array( $this, 'register_courses_taxonomies' ), 0 );
		add_action( 'init', array( $this, 'register_courses_post_type' ) );
		add_action( 'init', array( $this, 'register_courses_meta' ) );
		add_action( 'after_setup_theme', array( $this, 'maybe_flush_rewrite_rules' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_scripts' ) );

		add_filter( 'the_content', array( $this, 'display_course_meta' ) );
	}

	/**
	 * Flushes rewrite rules only on initial activation.
	 *
	 * @since 0.1.0
	 */
	public function maybe_flush_rewrite_rules() {
		if ( is_admin() && 'activated' === get_option( 'hrs-courses-plugin-activated' ) ) {
			delete_option( 'hrs-courses-plugin-activated' );
			flush_rewrite_rules();
		}
	}

	/**
	 * Activates the HRS Courses plugin.
	 *
	 * @since 0.1.0
	 */
	public static function hrs_courses_activate() {
		/*
		 * Don't love this, but can't see another solution. Need to flush
		 * rewrite rules only after the post type is created, but
		 * register_activation_hook	runs before that.
		 */
		add_option( 'hrs-courses-plugin-activated', 'activated' );
	}

	/**
	 * Deactivates the HRS Courses plugin.
	 *
	 * @since 0.1.0
	 */
	public static function hrs_courses_deactivate() {
		// Deregister custom post type, taxonomy, and shortcode (remove rules from memory).
		unregister_post_type( self::$post_type_slug );
		unregister_taxonomy( 'course_tag' );
		unregister_taxonomy( 'learning_program' );

		// Flush rewrite rules on plugin deactivation to remove custom permalinks.
		flush_rewrite_rules();
	}

	/**
	 * Creates the HRS Courses taxonomies.
	 *
	 * A callback on the `init` hook with a high priority of '0' to help make
	 * sure the taxonomies are registered before the custom post type so they
	 * can be interconnected.
	 *
	 * @since 0.1.0
	 */
	public function register_courses_taxonomies() {
		$labels = array(
			'name'          => _x( 'Course Tags', 'taxonomy general name', 'wsuwp-hrs-courses' ),
			'singular_name' => _x( 'Course Tag', 'taxonomy singular name', 'wsuwp-hrs-courses' ),
			'menu_name'     => __( 'Course Tags', 'wsuwp-hrs-courses' ),
			'all_items'     => __( 'All Course Tags', 'wsuwp-hrs-courses' ),
			'edit_item'     => __( 'Edit Course Tag', 'wsuwp-hrs-courses' ),
			'view_item'     => __( 'View Course Tag', 'wsuwp-hrs-courses' ),
			'update_item'   => __( 'Update Course Tag', 'wsuwp-hrs-courses' ),
			'add_new_item'  => __( 'Add New Course Tag', 'wsuwp-hrs-courses' ),
			'new_item_name' => __( 'New Course Tag Name', 'wsuwp-hrs-courses' ),
			'search_items'  => __( 'Search Course Tags', 'wsuwp-hrs-courses' ),
			'popular_items' => __( 'Popular Course Tags', 'wsuwp-hrs-courses' ),
		);

		$args = array(
			'labels'            => $labels,
			'show_in_rest'      => true,
			'show_admin_column' => true,
			'rewrite'           => array(
				'slug' => 'course-tag',
			),
		);

		register_taxonomy( 'course_tag', self::$post_type_slug, $args );

		$labels = array(
			'name'          => _x( 'Learning Programs', 'taxonomy general name', 'wsuwp-hrs-courses' ),
			'singular_name' => _x( 'Learning Program', 'taxonomy singular name', 'wsuwp-hrs-courses' ),
			'menu_name'     => __( 'Learning Programs', 'wsuwp-hrs-courses' ),
			'all_items'     => __( 'All Learning Programs', 'wsuwp-hrs-courses' ),
			'edit_item'     => __( 'Edit Learning Program', 'wsuwp-hrs-courses' ),
			'view_item'     => __( 'View Learning Program', 'wsuwp-hrs-courses' ),
			'update_item'   => __( 'Update Learning Program', 'wsuwp-hrs-courses' ),
			'add_new_item'  => __( 'Add New Learning Program', 'wsuwp-hrs-courses' ),
			'new_item_name' => __( 'New Learning Program Name', 'wsuwp-hrs-courses' ),
			'search_items'  => __( 'Search Learning Programs', 'wsuwp-hrs-courses' ),
			'popular_items' => __( 'Popular Learning Programs', 'wsuwp-hrs-courses' ),
		);

		$args = array(
			'labels'            => $labels,
			'show_in_rest'      => true,
			'show_admin_column' => true,
			'rewrite'           => array(
				'slug' => 'learning-program',
			),
		);

		register_taxonomy( 'learning_program', self::$post_type_slug, $args );
	}

	/**
	 * Registers the HRS Courses post type.
	 *
	 * Also defined the Courses post type block template.
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-templates/
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-templates/
	 *
	 * @since 0.1.0
	 */
	public function register_courses_post_type() {
		$labels = array(
			'name'                     => __( 'Courses', 'wsuwp-hrs-courses' ),
			'singular_name'            => __( 'Course', 'wsuwp-hrs-courses' ),
			'all_items'                => __( 'All Courses', 'wsuwp-hrs-courses' ),
			'add_new_item'             => __( 'Add New Course', 'wsuwp-hrs-courses' ),
			'edit_item'                => __( 'Edit Course', 'wsuwp-hrs-courses' ),
			'new_item'                 => __( 'New Course', 'wsuwp-hrs-courses' ),
			'view_item'                => __( 'View Course', 'wsuwp-hrs-courses' ),
			'search_items'             => __( 'Search Courses', 'wsuwp-hrs-courses' ),
			'not_found'                => __( 'No Courses found', 'wsuwp-hrs-courses' ),
			'not_found_in_trash'       => __( 'No Courses found in trash', 'wsuwp-hrs-courses' ),
			'attributes'               => __( 'Course Attributes', 'wsuwp-hrs-courses' ),
			'item_published'           => __( 'Course published', 'wsuwp-hrs-courses' ),
			'item_published_privately' => __( 'Course published privately', 'wsuwp-hrs-courses' ),
			'item_reverted_to_draft'   => __( 'Course reverted to draft', 'wsuwp-hrs-courses' ),
			'item_scheduled'           => __( 'Course scheduled', 'wsuwp-hrs-courses' ),
			'item_updated'             => __( 'Course updated', 'wsuwp-hrs-courses' ),
		);

		$args = array(
			'labels'          => $labels,
			'description'     => __( 'Course details.', 'wsuwp-hrs-courses' ),
			'public'          => true,
			'capability_type' => 'post',
			'hierarchical'    => false,
			'menu_icon'       => 'dashicons-book',
			'supports'        => array(
				'title',
				'editor',
				'author',
				'thumbnail',
				'excerpt',
				'revisions',
				'custom-fields',
			),
			'taxonomies'      => array(
				'course_tag',
				'learning_program',
			),
			'has_archive'     => false,
			'rewrite'         => array( 'slug' => 'training/courses' ),
			'show_in_rest'    => true,
			'template'        => array(
				array( 'hrscourses/course-date-time' ),
				array( 'hrscourses/course-location' ),
				array( 'core/paragraph', array( 'placeholder' => 'Describe the course…' ) ),
			),
		);

		register_post_type( self::$post_type_slug, $args );
	}

	/**
	 * Registers the Courses meta data.
	 *
	 * @since 0.1.0
	 */
	public function register_courses_meta() {
		register_meta(
			'post',
			'_' . self::$post_type_slug . '_datetime', // _wsuwp_hrs_courses_datetime
			array(
				'object_subtype' => self::$post_type_slug,
				'show_in_rest'   => true,
				'single'         => true,
				'type'           => 'string',
				'auth_callback'  => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		register_meta(
			'post',
			'_' . self::$post_type_slug . '_location', // _wsuwp_hrs_courses_location
			array(
				'object_subtype' => self::$post_type_slug,
				'show_in_rest'   => true,
				'single'         => true,
				'type'           => 'string',
				'auth_callback'  => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		register_meta(
			'post',
			'_' . self::$post_type_slug . '_online', // _wsuwp_hrs_courses_online
			array(
				'object_subtype' => self::$post_type_slug,
				'show_in_rest'   => true,
				'single'         => true,
				'type'           => 'string',
				'auth_callback'  => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		register_meta(
			'post',
			'_' . self::$post_type_slug . '_online_available', // _wsuwp_hrs_courses_online_available
			array(
				'object_subtype' => self::$post_type_slug,
				'show_in_rest'   => true,
				'single'         => true,
				'type'           => 'boolean',
				'auth_callback'  => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}

	/**
	 * Enqueues the plugin block editor scripts for this post type only.
	 *
	 * @since 0.1.0
	 */
	public function enqueue_scripts() {
		global $post;

		if ( self::$post_type_slug === $post->post_type ) {
			wp_enqueue_script(
				'wsuwp-hrs-courses-script',
				plugins_url( 'build/index.js', $this->basename ),
				array(
					'wp-blocks',
					'wp-element',
					'wp-components',
					'wp-i18n',
					'wp-block-editor',
					'wp-date',
					'wp-compose',
				)
			);
		}
	}

	/**
	 * Prints the course meta data if available.
	 *
	 * @since 0.1.0
	 */
	public function display_course_meta( $content ) {
		global $post;

		if ( self::$post_type_slug === $post->post_type ) {
			$datetime = get_post_meta( $post->ID, '_wsuwp_hrs_courses_datetime', true );
			$location = get_post_meta( $post->ID, '_wsuwp_hrs_courses_location', true );
			$online   = get_post_meta( $post->ID, '_wsuwp_hrs_courses_online_available', true );
			$url      = get_post_meta( $post->ID, '_wsuwp_hrs_courses_online', true );

			if ( $datetime || $location || $online ) {
				$meta = '';

				if ( $datetime ) {
					$meta .= sprintf( '<p class="date">Date: %1$s</p>', esc_html( $datetime ) );
				}

				if ( $location ) {
					$meta .= sprintf( '<p class="location">Location: %1$s</p>', $location );
				}

				if ( $online && $url ) {
					$meta .= sprintf( '<p class="online"><a href="%1$s">View course online</a></p>', esc_url( $url ) );
				}

				return sprintf( '<div class="course-meta">%1$s</div>%2$s', $meta, $content );
			}
		}

		return $content;
	}
}
