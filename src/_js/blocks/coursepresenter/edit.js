/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {	RichText } = wp.blockEditor;

export default function CoursePresenterEdit( {
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
					{ __( 'Course presenter(s)' ) }
				</p>
			</div>
			<RichText
				label={ __( 'Course date and time' ) }
				placeholder={ placeholder || __( 'Add presenter(s)…' ) }
				keepPlaceholderOnFocus={ true }
				value={ blockValue }
				onChange={ ( value ) => setAttributes( { blockValue: value } ) }
				formattingControls={ [ 'bold' ] }
			/>
		</div>
	);
}
