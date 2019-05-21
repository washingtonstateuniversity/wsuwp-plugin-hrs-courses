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
		onlineValue,
		placeholder,
	} = attributes;

	return (
		<div className={ className }>
			<TextControl
				label={ __( 'Course location' ) }
				placeholder={ placeholder || __( 'Add location…' ) }
				value={ blockValue }
				onChange={ ( value ) => setAttributes( { blockValue: value } ) }
			/>
			<TextControl
				label={ __( 'Online' ) }
				placeholder={ placeholder || __( 'Add URL…' ) }
				value={ onlineValue }
				onChange={ ( value ) => setAttributes( { onlineValue: value } ) }
			/>
		</div>
	);
}
