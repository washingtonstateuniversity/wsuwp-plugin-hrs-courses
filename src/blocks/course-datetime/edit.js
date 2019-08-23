/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {	RichText } = wp.blockEditor;

export default function CourseDateEdit( {
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
					{ __( 'Course date' ) }
				</p>
			</div>
			<RichText
				label={ __( 'Course date and time' ) }
				placeholder={ placeholder || __( 'Add date and / or time…' ) }
				keepPlaceholderOnFocus={ true }
				value={ blockValue }
				onChange={ ( value ) => setAttributes( { blockValue: value } ) }
				formattingControls={ [] }
			/>
		</div>
	);
}
