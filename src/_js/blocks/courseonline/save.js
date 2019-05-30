/**
 * WordPress dependencies
 */
const {	RichText } = wp.blockEditor;

export default function save( {
	attributes,
	className,
} ) {
	const {
		onlineLearningUrl,
		onlineLearningLink,
	} = attributes;

	if ( ! onlineLearningUrl ) {
		return null;
	}

	return (
		<RichText.Content
			tagName="a"
			className={ `${className} course-recorded-video__link` }
			href={ onlineLearningUrl }
			value={ onlineLearningLink }
		/>
	);
}
