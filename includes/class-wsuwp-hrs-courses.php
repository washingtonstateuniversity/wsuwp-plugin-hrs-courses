<?php
/**
 * WSUWP HRS Courses Registration: WSU_HRS_Courses class
 *
 * @package WSUWP_HRS_Courses
 * @since 0.1.0
 */
namespace WSUWP\HRS\Courses\Setup;
use WSUWP\HRS\Courses\Render;

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

			$instance->basename = $file;
			$instance->setup_hooks();
			$instance->includes();
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
		// Functions to handle rendering and formatting.
		require __DIR__ . '/render-functions.php';
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
		add_action( 'init', array( $this, 'register_dynamic_render_callbacks' ) );
		add_action( 'after_setup_theme', array( $this, 'maybe_flush_rewrite_rules' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_scripts' ) );
		add_filter( 'taxonomy_template', array( $this, 'load_template' ) );
		add_filter( 'archive_template', array( $this, 'load_template' ) );
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

		$template = array(
			array(
				'hrs-wsu-edu/sidebar',
				array( 'align' => 'wide' ),
				array(
					array(
						'core/column',
						array( 'className' => 'course-description' ),
						array(
							array(
								'core/paragraph',
								array( 'placeholder' => __( 'Describe the course…', 'wsuwp-hrs-courses' ) ),
							),
							array(
								'core/list',
								array(
									'placeholder' => __( 'Add course document…', 'wsuwp-hrs-courses' ),
									'className'   => 'course-documents',
								),
							),
							array(
								'core/button',
								array(
									'text'      => 'Enroll',
									'className' => 'is-style-outline'
								),
							),
						),
					),
					array(
						'core/column',
						array( 'className' => 'course-meta' ),
						array(
							array( 'hrscourses/course-date-time' ),
							array( 'hrscourses/course-location' ),
							array( 'hrscourses/course-presenter' ),
							array( 'hrscourses/course-online' ),
							array( 'hrscourses/course-video' ),
						),
					),
				),
			),
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
				'excerpt',
				'revisions',
				'custom-fields',
			),
			'taxonomies'      => array(
				'course_tag',
				'learning_program',
			),
			'has_archive'     => true,
			'rewrite'         => array( 'slug' => 'training/courses' ),
			'show_in_rest'    => true,
			'template'        => $template,
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
			'_' . self::$post_type_slug . '_presenter', // _wsuwp_hrs_courses_presenter
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
					'wp-block-editor',
					'wp-components',
					'wp-element',
					'wp-i18n',
				)
			);
		}
	}

	/**
	 * Sets up rendering callbacks for the Courses dynamic blocks.
	 *
	 * Because these are dynamic blocks they doesn’t use default block save
	 * implementation through the JS client. Instead they use a server component
	 * to render the output. The contents on the front end depend this function
	 * called by the `render_callback` property of `register_block_type`.
	 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/ Documentation on dynamic blocks.
	 *
	 * @since 0.3.0
	 */
	public function register_dynamic_render_callbacks() {
		$block_names = array(
			'hrscourses/course-date-time',
			'hrscourses/course-location',
			'hrscourses/course-presenter',
		);

		/*
		 * Registers a render callback for each dynamic block in block_names[]
		 * with the callback function name formatted by converting the name to
		 * lowercase and replacing non-alphanumeric characters and underscores
		 * with underscores. For example, "example/wp-block-02" would become:
		 * "render_block_example_wp_block_02".
		 */
		foreach ( $block_names as $name ) {
			register_block_type(
				$name,
				array(
					'render_callback' => 'WSUWP\HRS\Courses\Render\render_block_' . Render\sanitize_block_name( $name ),
				)
			);
		}
	}

	/**
	 * Loads custom templates for Courses display.
	 *
	 * @since 0.4.0
	 *
	 * @param string $template Path to the template. See locate_template().
	 * @return string Path to the custom template.
	 */
	public function load_template( $template ) {
		if ( is_tax( 'learning_program' ) || is_tax( 'course_tag' ) ) {
			$template = dirname( $this->basename ) . '/templates/archive.php';
		}

		if ( is_post_type_archive( self::$post_type_slug ) ) {
			$template = dirname( $this->basename ) . '/templates/archive.php';
		}

		return $template;
	}

}
