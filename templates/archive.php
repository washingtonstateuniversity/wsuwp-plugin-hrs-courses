<?php
/**
 * WSUWP Courses Archive Template
 *
 * The template for displaying lists of courses in archive formats.
 *
 * @package WSUWP_HRS_Courses
 * @since 0.4.0
 */
namespace WSUWP\HRS\Courses\Templates\Archive;
use WSUWP\HRS\Courses\Render;

get_header();
?>

<main id="wsuwp-main" class="wsuwp-courses-archive">

	<header class="page-header">
		<h1>
			<?php
			printf(
				/* translators: the HRS news archive title: 1: the taxonomy name */
				esc_html__( '%s Courses', 'wsuwp-hrs-courses' ),
				single_term_title( '', false )
			);
			?>
		</h1>
	</header>

	<?php
	if ( have_posts() ) {
		while ( have_posts() ) {
			the_post();
			?>
			<section class="row single gutter pad-bottom courses-archive">
				<div class="column one courses-list">
					<article id="post-<?php the_ID(); ?>" <?php post_class( 'archive-content' ); ?>>
						<header class="article-header">
							<p class="article-title">
								<a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
							</p>
						</header>
						<div class="article-content">
							<?php the_content(); ?>
						</div>
					</article>
				</div>
			</section>
			<?php
		}
	}

	Render\archive_pagination();

	get_template_part( 'parts/footers' );
	?>

</main><!--/#page-->

<?php
get_footer();
