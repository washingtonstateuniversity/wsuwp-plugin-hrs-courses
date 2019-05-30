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
		return sprintf(
			'<p class="wp-block-hrscourses-course-date-time"><span class="label">%1$s</span> %2$s</p>',
			__( 'Date:', 'wsuwp-hrs-courses' ),
			$datetime
		);
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
	$location  = get_post_meta( get_the_ID(), '_wsuwp_hrs_courses_location', true );

	if ( $location ) {
		return sprintf(
			'<p class="wp-block-hrscourses-course-location"><span class="label">%1$s</span> %2$s</p>',
			__( 'Location:', 'wsuwp-hrs-courses' ),
			$location
		);
	}
}

/**
 * Renders the HRS Courses presenter post meta for display.
 *
 * @since 0.3.0
 *
 * @param array $attributes Optional. An array of block attributes passed from `register_block_type`.
 * @param array $content    Optional. Content value(s) passed from `register_block_type`.
 * @return string The formatted HTML for display.
 */
function render_block_hrscourses_course_presenter( $attributes, $content ) {
	$presenter = get_post_meta( get_the_ID(), '_wsuwp_hrs_courses_presenter', true );

	if ( $presenter ) {
		return sprintf(
			'<p class="wp-block-hrscourses-course-presenter"><span class="label">%1s</span> %2$s</p>',
			__( 'Presenter:', 'wsuwp-hrs-courses' ),
			$presenter
		);
	}

	return;
}

/**
 * Displays the post archive page navigation.
 *
 * Retrieves and displays the pagination navigation section on archive type
 * pages such as a taxonomy archives page.
 *
 * @since 0.4.0
 */
function archive_pagination( $total_pages = '' ) {
	$args = array(
		'base'               => str_replace( 99164, '%#%', esc_url( get_pagenum_link( 99164 ) ) ),
		'format'             => 'page/%#%',
		'type'               => 'list',
		'current'            => max( 1, get_query_var( 'paged' ) ),
		'prev_text'          => 'Previous <span class="screen-reader-text">page</span>',
		'next_text'          => 'Next <span class="screen-reader-text">page</span>',
		'before_page_number' => '<span class="screen-reader-text">Page </span>',
	);

	if ( '' !== $total_pages ) {
		$args['total'] = $total_pages;
	}

	$pagination = paginate_links( $args );

	if ( ! empty( $pagination ) ) {
		?>
		<footer class="article-footer">
			<section class="row single pager prevnext gutter pad-ends">
				<div class="column one">
					<nav class="navigation pagination" role="navigation" aria-label="Pagination navigation">
						<?php echo wp_kses_post( $pagination ); ?>
					</nav>
				</div>
			</section>
		</footer>
		<?php
	}
}
