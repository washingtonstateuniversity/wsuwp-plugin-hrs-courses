/**
 * WordPress dependencies
 */
const {	RichText } = wp.blockEditor;

export default function save( {
	attributes,
	className,
} ) {
	const {
		recordedVideoUrl,
		recordedVideoLink,
	} = attributes;

	if ( ! recordedVideoUrl ) {
		return null;
	}

	return (
		<RichText.Content
			tagName="a"
			className={ `${ className } course-recorded-video__link` }
			href={ recordedVideoUrl }
			value={ recordedVideoLink }
		/>
	);
}
