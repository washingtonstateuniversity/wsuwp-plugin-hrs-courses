/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;

export default function CourseLocationEdit( {
	attributes,
	className,
	setAttributes,
} ) {
	const {
		locationMetaValue,
		displayValue /* eslint-disable-line no-unused-vars */,
		placeholder,
	} = attributes;

	return (
		<div className={ className }>
			<div className={ 'components-base-control' }>
				<span className="components-base-control__label">
					{ __( 'Location: ' ) }
				</span>
			</div>
			<RichText
				tagName="span"
				className="course-location"
				label={ __( 'Course location' ) }
				placeholder={
					placeholder || __( 'Add location…', 'wsuwp-hrs-courses' )
				}
				value={ locationMetaValue }
				onChange={ ( value ) =>
					setAttributes( {
						locationMetaValue: value,
						displayValue: value,
					} )
				}
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</div>
	);
}
