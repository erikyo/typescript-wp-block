import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { Properties } from './types';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the editor.
 *
 * @param  props
 * @param  props.attributes    - the block attributes
 * @param  props.setAttributes - the setState function
 *
 */
export default function Edit( {
	attributes,
	setAttributes,
}: Properties ): JSX.Element {
	return (
		<div { ...useBlockProps() }>
			<TextControl
				label={ __( 'Message', 'Strings only' ) }
				value={ attributes.message }
				onChange={ ( val ) =>
					setAttributes( { message: val.toString() } )
				}
			/>
		</div>
	);
}
