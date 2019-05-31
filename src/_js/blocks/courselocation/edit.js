/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {	RichText } = wp.blockEditor;

export default function CourseLocationEdit( {
	attributes,
	className,
	setAttributes,
} ) {
	const {
		blockValue,
		placeholder,
	} = attributes;

	return (
		<div className={ className }>
			<div className={ 'components-base-control' }>
				<p className="components-base-control__label">
					{ __( 'Course location' ) }
				</p>
			</div>
			<RichText
				label={ __( 'Course location' ) }
				placeholder={ placeholder || __( 'Add location…', 'wsuwp-hrs-courses' ) }
				keepPlaceholderOnFocus={ true }
				value={ blockValue }
				onChange={ ( value ) => setAttributes( { blockValue: value } ) }
				formattingControls={ [ 'bold', 'italic' ] }
			/>
		</div>
	);
}
