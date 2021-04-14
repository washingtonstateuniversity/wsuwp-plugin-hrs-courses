/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

/**
 * Internal dependencies
 */
import { ListTerms } from './list-terms';

export const PostMeta = ( props ) => {
	const {
		displayPostDate,
		displayPostTaxonomy,
		post,
		taxonomies,
		termLists,
	} = props;

	const dateFormat = __experimentalGetSettings().formats.date;

	const hasPostTerms = displayPostTaxonomy;

	return (
		<div className="wp-block-hrswp-posts-list--meta">
			{ hasPostTerms &&
				taxonomies.map( ( taxonomy ) => {
					if ( ! displayPostTaxonomy ) {
						return null;
					}
					const prefix = `${ taxonomy.labels.singular_name }: `;

					return (
						<ListTerms
							key={ taxonomy.slug }
							post={ post }
							terms={ termLists }
							taxonomySlug={ taxonomy.slug }
							prefix={ prefix }
						/>
					);
				} ) }
			{ displayPostDate && post.date_gmt && (
				<p className="wp-block-hrswp-posts-list--post-date">
					{ __( 'Published on ' ) }
					<time dateTime={ format( 'c', post.date_gmt ) }>
						{ dateI18n( dateFormat, post.date_gmt ) }
					</time>
				</p>
			) }
		</div>
	);
};
