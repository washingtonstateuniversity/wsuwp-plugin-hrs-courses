<?php
/**
 * Server-side rendering of the `hrscourses/latest-courses` block.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.4.0
 */
namespace WSUWP\HRS\Courses\Blocks\latest_courses;
use WSUWP\HRS\Courses\Setup;

/**
 * Renders the `hrscourses/latest-courses` dynamic block contents.
 *
 * @since 0.4.0
 *
 * @param array $attributes The block attributes passed from `register_block_type`.
 *
 * @return string The formatted HTML for display.
 */
function render_block_latest_courses( $attributes ) {
	$args = array(
		'posts_per_page'   => $attributes['coursesToShow'],
		'post_type'        => Setup\WSUWP_HRS_Courses::$post_type_slug,
		'post_status'      => 'publish',
		'order'            => $attributes['order'],
		'orderby'          => $attributes['orderBy'],
		'suppress_filters' => false,
	);

	if ( isset( $attributes['learningPrograms'] ) ) {
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'learning_program',
				'field'    => 'slug',
				'terms'    => $attributes['learningPrograms'],
			)
		);
	}

	$recent_courses = get_posts( $args );

	$list_items_markup = '';

	$excerpt_length = $attributes['excerptLength'];

	foreach ( $recent_courses as $course ) {
		$title = get_the_title( $course );
		if ( ! $title ) {
			$title = __( '(Untitled)', 'wsuwp-hrs-courses' );
		}
		$list_items_markup .= sprintf(
			'<li><a href="%1$s">%2$s</a>',
			esc_url( get_permalink( $course ) ),
			$title
		);

		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
			$list_items_markup .= sprintf(
				'<time datetime="%1$s" class="wp-block-hrscourses-latest-courses__post-date">%2$s</time>',
				esc_attr( get_the_date( 'c', $course ) ),
				esc_html( get_the_date( '', $course ) )
			);
		}

		if ( isset( $attributes['displayCourseContent'] ) && $attributes['displayCourseContent']
			&& isset( $attributes['displayCourseContentRadio'] ) && 'excerpt' === $attributes['displayCourseContentRadio'] ) {
			$course_excerpt = $course->post_excerpt;
			if ( ! ( $course_excerpt ) ) {
				$course_excerpt = $course->post_content;
			}
			$trimmed_excerpt = esc_html( wp_trim_words( $course_excerpt, $excerpt_length, ' &hellip; ' ) );

			$list_items_markup .= sprintf(
				'<div class="wp-block-hrscourses-latest-courses__post-excerpt">%1$s',
				$trimmed_excerpt
			);

			if ( strpos( $trimmed_excerpt, ' &hellip; ' ) !== false ) {
				$list_items_markup .= sprintf(
					'<a href="%1$s">%2$s</a></div>',
					esc_url( get_permalink( $course ) ),
					__( 'Read More' )
				);
			} else {
				$list_items_markup .= sprintf(
					'</div>'
				);
			}
		}

		if ( isset( $attributes['displayCourseContent'] ) && $attributes['displayCourseContent']
			&& isset( $attributes['displayCourseContentRadio'] ) && 'full_post' === $attributes['displayCourseContentRadio'] ) {
			$list_items_markup .= sprintf(
				'<div class=".wp-block-hrscourses-latest-courses__full_content">%1$s</div>',
				wp_kses_post( html_entity_decode( $course->post_content, ENT_QUOTES, get_option( 'blog_charset' ) ) )
			);
		}

		$list_items_markup .= "</li>\n";
	}

	$class = 'wp-block-hrscourses-latest-courses wp-block-latest-posts__list';
	if ( isset( $attributes['align'] ) ) {
		$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
		$class .= ' is-grid';
	}

	if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
		$class .= ' columns-' . $attributes['columns'];
	}

	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
		$class .= ' has-dates';
	}

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	$block_content = sprintf(
		'<ul class="%1$s">%2$s</ul>',
		esc_attr( $class ),
		$list_items_markup
	);

	return $block_content;
}

/**
 * Registers the `hrscourses/latest-courses` on the server.
 *
 * @since 0.4.0
 */
function register_block_latest_courses() {
	register_block_type(
		'hrscourses/latest-courses',
		array(
			'attributes'      => array(
				'align'                     => array(
					'type' => 'string',
					'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
				),
				'className'                 => array(
					'type' => 'string',
				),
				'learningPrograms'          => array(
					'type' => 'string',
				),
				'coursesToShow'             => array(
					'type'    => 'number',
					'default' => 5,
				),
				'displayCourseContent'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'displayCourseContentRadio' => array(
					'type'    => 'string',
					'default' => 'excerpt',
				),
				'excerptLength'             => array(
					'type'    => 'number',
					'default' => 55,
				),
				'displayPostDate'           => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'postLayout'                => array(
					'type'    => 'string',
					'default' => 'list',
				),
				'columns'                   => array(
					'type'    => 'number',
					'default' => 3,
				),
				'order'                     => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                   => array(
					'type'    => 'string',
					'default' => 'date',
				),
			),
			'render_callback' => __NAMESPACE__ . '\render_block_latest_courses',
		)
	);
}
// Use later priority to make sure required resources are ready.
add_action( 'init', __NAMESPACE__ . '\register_block_latest_courses', 25 );
