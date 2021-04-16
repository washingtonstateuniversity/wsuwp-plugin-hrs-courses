<?php
/**
 * Server-side rendering of the `hrscourses/courses-list` block.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\CoursesList;

/**
 * Registers and renders the `hrscourses/courses-list` block
 *
 * @since 0.5.0
 */
class CoursesList {
	/**
	 * The excerpt length set by the `hrscourses/courses-list` block.
	 *
	 * @since 0.5.0
	 * @var int
	 */
	public $excerpt_length = 0;

	/**
	 * Initializes the `CoursesList` class.
	 *
	 * @since 0.5.0
	 */
	public function __construct() {
		$this->register();
	}

	/**
	 * Returns the excerpt length set by the `hrscourses/courses-list` block.
	 *
	 * @since 0.5.0
	 *
	 * @return int The excerpt length.
	 */
	public function get_excerpt_length() {
		return $this->excerpt_length;
	}

	/**
	 * Renders the `hrscourses/courses-list` block on the server.
	 *
	 * @since 0.5.0
	 *
	 * @param array $attributes The block attributes.
	 * @return string Returns a list of posts.
	 */
	public function render( $attributes ) {
		$args = array(
			'posts_per_page'   => $attributes['postsToShow'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
		);

		$this->excerpt_length = $attributes['excerptLength'];
		add_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 25 );

		// Taxonomy handling.
		// phpcs:disable WordPress.DB.SlowDBQuery.slow_db_query_tax_query
		if ( isset( $attributes['selectedTermLists'] ) && ! empty( $attributes['selectedTermLists'] ) ) {
			// Begin the query.
			$args['tax_query'] = array( 'relation' => 'AND' );

			// Build each query array.
			foreach ( $attributes['selectedTermLists'] as $slug => $terms ) {
				// WP_Query uses some different props than the Rest API \(°-°)/.
				if ( 'categories' === $slug ) {
					$slug = 'category';
				}
				if ( 'tags' === $slug ) {
					$slug = 'post_tag';
				}

				if ( ! empty( $terms ) ) {
					$args['tax_query'][] = array(
						'taxonomy' => $slug,
						'field'    => 'id',
						'terms'    => array_column( $terms, 'id' ),
					);
				}
			}
		}
		// phpcs:enable WordPress.DB.SlowDBQuery.slow_db_query_tax_query

		$posts = get_posts( $args );

		$list_items_markup = '';

		foreach ( $posts as $post ) {

			$list_items_markup .= '<div class="wp-block-hrswp-posts-list--list-item">';
			$list_items_markup .= '<div class="wp-block-hrswp-posts-list--body">';

			$title = get_the_title( $post );
			if ( ! $title ) {
				$title = __( '(no title)', 'wsuwp-hrs-courses' );
			}
			$list_items_markup .= sprintf(
				'<h3 class="wp-block-hrswp-posts-list--heading"><a href="%1$s">%2$s</a></h3>',
				esc_url( get_permalink( $post ) ),
				$title
			);

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'excerpt' === $attributes['displayPostContentRadio'] ) {

				$trimmed_excerpt = get_the_excerpt( $post );

				$list_items_markup .= sprintf(
					'<p class="wp-block-hrswp-posts-list--post-excerpt">%1$s</p>',
					$trimmed_excerpt
				);
			}

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'full_post' === $attributes['displayPostContentRadio'] ) {
				$list_items_markup .= sprintf(
					'<div class="wp-block-hrswp-posts-list--post-full-content">%1$s</div>',
					wp_kses_post( html_entity_decode( $post->post_content, ENT_QUOTES, get_option( 'blog_charset' ) ) )
				);
			}

			$post_meta_markup = '';
			if ( isset( $attributes['displayPostTaxonomy'] ) ) {
				$taxonomy_names = get_object_taxonomies( $post->post_type );

				foreach ( $taxonomy_names as $taxonomy_name ) {
					if (
						'category' === $taxonomy_name &&
						isset( $attributes['displayPostCategory'] ) &&
						$attributes['displayPostCategory']
					) {
						$prefix = sprintf(
							'<p class="wp-block-hrswp-posts-list--%1$s-list"><span>%2$s: </span>',
							esc_attr( $taxonomy_name ),
							__( 'More on', 'wsuwp-hrs-courses' )
						);

						$post_meta_markup .= get_the_term_list( $post->ID, $taxonomy_name, $prefix, ', ', '</p>' );
					} elseif (
						'post_tag' === $taxonomy_name &&
						isset( $attributes['displayPostTag'] ) &&
						$attributes['displayPostTag']
					) {
						$prefix = sprintf(
							'<p class="wp-block-hrswp-posts-list--%1$s-list"><span>%2$s: </span>',
							esc_attr( $taxonomy_name ),
							__( 'Tagged', 'wsuwp-hrs-courses' )
						);

						$post_meta_markup .= get_the_term_list( $post->ID, $taxonomy_name, $prefix, ', ', '</p>' );
					} else {
						if (
							'post_tag' !== $taxonomy_name &&
							'category' !== $taxonomy_name &&
							isset( $attributes['displayPostTaxonomy'] ) &&
							$attributes['displayPostTaxonomy']
						) {
							$taxonomy_object = get_taxonomy( $taxonomy_name );
							$prefix          = sprintf(
								'<p class="wp-block-hrswp-posts-list--%1$s-list"><span>%2$s: </span>',
								esc_attr( $taxonomy_name ),
								esc_html( $taxonomy_object->labels->singular_name )
							);

							$post_meta_markup .= get_the_term_list( $post->ID, $taxonomy_name, $prefix, ', ', '</p>' );
						}
					}
				}
			}
			if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
				$post_meta_markup .= sprintf(
					'<p class="wp-block-hrswp-posts-list--post-date">%1$s <time datetime="%2$s">%3$s</time></p>',
					__( 'Published on', 'wsuwp-hrs-courses' ),
					esc_attr( get_the_date( 'c', $post ) ),
					esc_html( get_the_date( '', $post ) )
				);
			}

			if ( '' !== $post_meta_markup ) {
				$list_items_markup .= sprintf(
					'<div class="wp-block-hrswp-posts-list--meta">%1$s</div>',
					$post_meta_markup
				);
			}

			$list_items_markup .= "</div></div>\n";
		}

		remove_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 20 );

		$class = array( 'wp-block-hrswp-posts-list' );

		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
			$class[] = 'has-date';
		}

		if ( isset( $attributes['align'] ) ) {
			$class[] = 'align' . $attributes['align'];
		}

		if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
			$class[] = 'is-grid';
		}

		if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
			$class[] = 'columns-' . $attributes['columns'];
		}

		if (
			isset( $attributes['displayPostContent'] )
			&& $attributes['displayPostContent']
			&& isset( $attributes['displayPostContentRadio'] )
		) {
			if ( 'full_post' === $attributes['displayPostContentRadio'] ) {
				$class[] = 'has-full-content';
			} elseif ( 'excerpt' === $attributes['displayPostContentRadio'] ) {
				$class[] = 'has-excerpt';
			}
		}

		if ( isset( $attributes['className'] ) ) {
			$class[] = $attributes['className'];
		}

		return sprintf(
			'<div class="%1$s">%2$s</div>',
			esc_attr( implode( ' ', $class ) ),
			$list_items_markup
		);
	}

	/**
	 * Registers the `hrscourses/courses-list` block on the server.
	 */
	public function register() {
		/* translators: Maximum number of words in a post excerpt. */
		$excerpt_length = intval( _x( '55', 'excerpt_length', 'wsuwp-hrs-courses' ) );
		$excerpt_length = (int) apply_filters( 'excerpt_length', $excerpt_length );

		$post_to_show = (int) get_option( 'posts_per_page', 5 );

		register_block_type(
			'hrscourses/courses-list',
			array(
				'attributes'      => array(
					'align'                   => array(
						'type' => 'string',
						'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
					),
					'className'               => array(
						'type' => 'string',
					),
					'selectedTermLists'       => array(
						'type'    => 'object',
						'default' => array(
							'learningProgramIds' => array(),
							'courseTagIds'       => array(),
						),
					),
					'postsToShow'             => array(
						'type'    => 'number',
						'default' => $post_to_show,
					),
					'displayPostContent'      => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostContentRadio' => array(
						'type'    => 'string',
						'default' => 'excerpt',
					),
					'excerptLength'           => array(
						'type'    => 'number',
						'default' => $excerpt_length,
					),
					'displayPostDate'         => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostTaxonomy'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'postLayout'              => array(
						'type'    => 'string',
						'default' => 'list',
					),
					'columns'                 => array(
						'type'    => 'number',
						'default' => 3,
					),
					'order'                   => array(
						'type'    => 'string',
						'default' => 'desc',
					),
					'orderBy'                 => array(
						'type'    => 'string',
						'default' => 'date',
					),
				),
				'render_callback' => array( $this, 'render' ),
			)
		);
	}
}

/**
 * Creates a new instance of the `CoursesList` class.
 *
 * @since 0.5.0
 *
 * @return CoursesList An instance of the CoursesList class.
 */
function load() {
	return new CoursesList();
}
add_action( 'init', __NAMESPACE__ . '\load', 25 );
