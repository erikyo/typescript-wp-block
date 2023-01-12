import { registerBlockType } from '@wordpress/blocks';
/** add styles to bundle */
import './style/style-admin.scss';

/** the edit function */
import Edit from './edit';

/** the save function */
import Save from './save';

/** Block settings */
import blockConfig from './block.json';

const jsondata = blockConfig as Record< string, any >;

registerBlockType( jsondata.name, {
	...jsondata,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: Save,
	attributes: {
		message: {
			type: 'string',
			source: 'text',
			default: '',
		},
	},
} );
