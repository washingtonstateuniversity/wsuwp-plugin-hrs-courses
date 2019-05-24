/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
	Dashicon,
	IconButton,
	PanelBody,
	ToggleControl,
} = wp.components;
const {
	InspectorControls,
	RichText,
	URLInput,
} = wp.blockEditor;

export default function CourseLocationEdit( {
	attributes,
	className,
	setAttributes,
	isSelected,
} ) {
	const {
		blockValue,
		onlineValue,
		onlineValueToggle,
		placeholder,
	} = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Online Location Settings', 'wsuwp-hrs-courses' ) }>
					<ToggleControl
						label={ __( 'Online Location Available', 'wsuwp-hrs-courses' ) }
						checked={ onlineValueToggle }
						onChange={ ( checked ) => setAttributes( { onlineValueToggle: checked } ) }
					/>
				</PanelBody>
			</InspectorControls>
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
			{ onlineValueToggle && isSelected && (
				<form
					className="block-library-button__inline-link"
					onSubmit={ ( event ) => event.preventDefault() }
				>
					<Dashicon icon="media-video" />
					<URLInput
						value={ onlineValue }
						onChange={ ( value ) => setAttributes( { onlineValue: value } ) }
					/>
					<IconButton icon="editor-break" label={ __( 'Apply course URL' ) } type="submit" />
				</form>
			) }
		</Fragment>
	);
}
