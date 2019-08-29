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
		<?php
		if ( is_tax() ) {
			the_archive_description();
		}
		?>
	</header>
	<section class="row single gutter courses-archive">
		<?php
		if ( have_posts() ) {
			while ( have_posts() ) {
				the_post();
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'archive-content column one' ); ?>>
					<header class="article-header">
						<p class="course-title">
							<a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
						</p>
						<div class="article-taxonomy--primary">
							<?php
							echo get_the_term_list(
								get_the_ID(),
								'learning_program',
								__( '<ul><li>', 'wsuwp-hrs-courses' ),
								' ',
								'</li></ul>'
							);
							?>
						</div>
					</header>
					<div class="article-content">
						<?php the_content(); ?>
					</div>
				</article>
				<?php
			}
		}
		?>
	</section>
	<?php Render\archive_pagination(); ?>
	<?php get_template_part( 'parts/footers' ); ?>

</main><!--/#page-->

<?php
get_footer();
