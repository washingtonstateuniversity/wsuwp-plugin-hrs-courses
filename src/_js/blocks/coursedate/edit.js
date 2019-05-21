/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { TextControl } = wp.components;

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
			<TextControl
				label={ __( 'Course date and time' ) }
				placeholder={ placeholder || __( 'Add date and / or time…' ) }
				value={ blockValue }
				onChange={ ( value ) => setAttributes( { blockValue: value } ) }
			/>
		</div>
	);
}
