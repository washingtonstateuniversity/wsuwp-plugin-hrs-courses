<?php
/**
 * Server-side rendering of the `hrscourses/courses-list` block.
 *
 * @package WSUWP_HRS_Courses
 * @since 1.5.0
 */

namespace WSUWP\HRS\Courses\Blocks\CoursesList;
use WSUWP\HRS\Courses\Setup;

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
	 * Renders inner blocks from the `core/columns` or `hrswp/sidebar` blocks.
	 *
	 * Essentially a copy of the core `_excerpt_render_inner_columns_blocks`
	 * function.
	 *
	 * @since 1.5.0
	 *
	 * @param array $columns        The parsed columns or sidebar block.
	 * @param array $allowed_blocks The list of allowed inner blocks.
	 * @return string The rendered inner blocks.
	 */
	private function excerpt_render_inner_columns_blocks( $columns, $allowed_blocks ) {
		$output = '';

		foreach ( $columns['innerBlocks'] as $column ) {
			foreach ( $column['innerBlocks'] as $inner_block ) {
				if ( in_array( $inner_block['blockName'], $allowed_blocks, true ) && empty( $inner_block['innerBlocks'] ) ) {
					$output .= render_block( $inner_block );
				}
			}
		}

		return $output;
	}

	/**
	 * Parses blocks out of a content string and renders those allowed in an excerpt.
	 *
	 * This function strips out blocks that are unlikely to contain text content or
	 * that might mess up an excerpt. It also tries to get allowed blocks from inside
	 * of layout blocks like the `core/columns` and `hrswp/sidebar` blocks. This is
	 * essentially a copy of the core `excerpt_remove_blocks` function, which doesn't
	 * support adding blocks with inner blocks to the allowed blocks list.
	 *
	 * @since 1.5.0
	 *
	 * @param string $content The content to parse.
	 * @return string The parsed and filtered content.
	 */
	private function excerpt_remove_blocks( $content ) {
		$allowed_inner_blocks = array(
			null, // Classic blocks have their blockName set to null.
			'core/freeform',
			'core/heading',
			'core/html',
			'core/list',
			'core/media-text',
			'core/paragraph',
			'core/preformatted',
			'core/pullquote',
			'core/quote',
			'core/table',
			'core/verse',
		);

		$allowed_blocks = array_merge(
			$allowed_inner_blocks,
			array( 'core/columns', 'hrswp/sidebar' )
		);

		$blocks = parse_blocks( $content );
		$output = '';
		foreach ( $blocks as $block ) {
			if ( in_array( $block['blockName'], $allowed_blocks, true ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					if (
						'core/columns' === $block['blockName'] ||
						'hrswp/sidebar' === $block['blockName']
					) {
						$output .= $this->excerpt_render_inner_columns_blocks( $block, $allowed_inner_blocks );
						continue;
					}

					// Skip the block if it has disallowed or nested inner blocks.
					foreach ( $block['innerBlocks'] as $inner_block ) {
						if (
							! in_array( $inner_block['blockName'], $allowed_inner_blocks, true ) ||
							! empty( $inner_block['innerBlocks'] )
						) {
							continue 2;
						}
					}
				}

				$output .= render_block( $block );
			}
		}

		return $output;
	}

	/**
	 * Trims the course content for the excerpt.
	 *
	 * @since 1.5.0
	 *
	 * @param WP_Post|object|int $post The post instance or ID/object to be trimmed.
	 * @return string The generated excerpt text html.
	 */
	private function create_excerpt( $post ) {
		if ( ! $post ) {
			return;
		}

		$content = get_the_content( '', false, $post );
		$content = $this->excerpt_remove_blocks( $content );

		$excerpt_length = (int) $this->get_excerpt_length();
		$excerpt_length = (int) apply_filters( 'excerpt_length', $excerpt_length );
		$excerpt_more   = apply_filters( 'excerpt_more', ' ' . '[&hellip;]' );

		return wp_trim_words( $content, $excerpt_length, $excerpt_more );
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
			'post_type'        => Setup\WSUWP_HRS_Courses::$post_type_slug,
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
		);

		$this->excerpt_length = $attributes['excerptLength'];
		add_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 25 );

		// Taxonomy handling.
		if ( isset( $attributes['selectedTermLists'] ) && ! empty( $attributes['selectedTermLists'] ) ) {
			if ( ! empty( $attributes['selectedTermLists']['learningProgramIds'] ) ) {
				$args['tax_query'][] = array(
					'taxonomy' => 'learning_program',
					'field'    => 'id',
					'terms'    => $attributes['selectedTermLists']['learningProgramIds'],
				);
			}
			if ( ! empty( $attributes['selectedTermLists']['courseTagIds'] ) ) {
				$args['tax_query'][] = array(
					'taxonomy' => 'course_tag',
					'field'    => 'id',
					'terms'    => $attributes['selectedTermLists']['courseTagIds'],
				);
			}
		}

		$posts = get_posts( $args );

		if ( ! $posts ) {
			return '<div class="wp-block-hrscourses-courses-list"><p>' . __( 'No courses found.', 'wsuwp-hrs-courses' ) . '</p></div>';
		}

		$list_items_markup = '';
		foreach ( $posts as $post ) {
			$list_items_markup .= '<div class="wp-block-hrscourses-courses-list--list-item"><div class="wp-block-hrscourses-courses-list--body">';

			$title = get_the_title( $post );
			if ( ! $title ) {
				$title = __( '(no title)', 'wsuwp-hrs-courses' );
			}
			$list_items_markup .= '<h3 class="wp-block-hrscourses-courses-list--heading"><a href="' . esc_url( get_permalink( $post ) ) . '">' . $title . '</a></h3>';

			if (
				isset( $attributes['displayPostContent'] ) &&
				$attributes['displayPostContent'] &&
				isset( $attributes['displayPostContentRadio'] )
			) {
				if ( 'excerpt' === $attributes['displayPostContentRadio'] ) {
					$list_items_markup .= '<p class="wp-block-hrscourses-courses-list--post-excerpt">' . $this->create_excerpt( $post ) . '</p>';
				}
				if ( 'full_post' === $attributes['displayPostContentRadio'] ) {
					$post_content       = html_entity_decode( $post->post_content, ENT_QUOTES, get_option( 'blog_charset' ) );
					$list_items_markup .= '<div class="wp-block-hrscourses-courses-list--post-full-content">' . wp_kses_post( $post_content ) . '</div>';
				}
			}

			$post_meta_markup = '';
			if ( isset( $attributes['displayLearningProgram'] ) && $attributes['displayLearningProgram'] ) {
				$prefix            = '<p class="wp-block-hrscourses-courses-list--learning_program-list"><span>' . __( 'Learning Programs', 'wsuwp-hrs-courses' ) . ': </span>';
				$post_meta_markup .= get_the_term_list( $post->ID, 'learning_program', $prefix, ', ', '</p>' );
			}
			if ( isset( $attributes['displayCourseTag'] ) && $attributes['displayCourseTag'] ) {
				$prefix            = '<p class="wp-block-hrscourses-courses-list--course_tag-list"><span>' . __( 'Course Tags', 'wsuwp-hrs-courses' ) . ': </span>';
				$post_meta_markup .= get_the_term_list( $post->ID, 'course_tag', $prefix, ', ', '</p>' );
			}
			if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
				$post_meta_markup .= sprintf(
					'<p class="wp-block-hrscourses-courses-list--post-date">%1$s <time datetime="%2$s">%3$s</time></p>',
					__( 'Published on', 'wsuwp-hrs-courses' ),
					esc_attr( get_the_date( 'c', $post ) ),
					esc_html( get_the_date( '', $post ) )
				);
			}

			if ( '' !== $post_meta_markup ) {
				$list_items_markup .= '<div class="wp-block-hrscourses-courses-list--meta">' . $post_meta_markup . '</div>';
			}

			$list_items_markup .= "</div></div>\n";
		}

		remove_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 20 );

		$class = array( 'wp-block-hrscourses-courses-list' );

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
					'displayLearningProgram'  => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayCourseTag'        => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostDate'         => array(
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
