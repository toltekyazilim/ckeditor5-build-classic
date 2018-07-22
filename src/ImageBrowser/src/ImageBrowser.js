import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg'; //'./insert.svg';

import ImageInsertCommand from './Insert';
import ImageBrowseCommand from './Browse';
 
export default class ImageBrowser extends Plugin {
	static get pluginName() {
		return 'ImageBrowser';
	}
	init() {
		const browseUrl = this.editor.config.get('ImageBrowser.browserUrl'); 
		if (!browseUrl) {
			console.warn('ImageBrowser.browserUrl is not configured')
			return;
		}

		const editor = this.editor;
		editor.commands.add('insertImage', new ImageInsertCommand(editor)); 
		editor.commands.add('browseImage', new ImageBrowseCommand(editor));

		editor.ui.componentFactory.add('browseImage', locale => {
			const view = new ButtonView(locale);
			view.set({
				label: 'Resim Ekle',
				icon: imageIcon,
				tooltip: true
			});
			view.on('execute', () => {
				editor.execute("browseImage", browseUrl);
			});
			return view;
		}); 
	}  
}
