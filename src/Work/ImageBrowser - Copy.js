import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import imageIcon from './insert.svg'; //'@ckeditor/ckeditor5-core/theme/icons/check.svg';
//export const ImageBrowserToolbarName = 'insertImage';
export default class ImageBrowser extends Plugin {
	static get pluginName() {
		return 'ImageBrowser';
	}
	init() {

		const url = this.editor.config.get('ImageBrowser.browserUrl');

		if (!url) {
			console.warn('ImageBrowser.browserUrl is not configured')
			return;
		}

		const editor = this.editor;
		//const model = this.editor.model;
		//const selection = model.document.selection;
		//const position = selection.getFirstPosition();

		editor.ui.componentFactory.add('insertImage', locale => {
			const view = new ButtonView(locale); 
			view.set({
				label: 'Resim Ekle',
				icon: imageIcon,
				tooltip: true
			});
			view.on('execute', () => {
				BrowserCenter(url, 'ImageBrowser', 800, 600);
			});
			return view;
		});

		function BrowserOpen(url, name, prms) { 
			window.open(url, name, prms); 
			return false;
		}
		function BrowserCenter(url, name, popwidth, popheight) {
			//alert(url + "-" + name);
			var left = (screen.width - popwidth) / 2;
			var top = (screen.height - popheight) / 2;
			var params = 'width=' + popwidth + ', height=' + popheight;
			params += ', top=' + top + ', left=' + left;
			params += ', directories=0';
			params += ', location=0';
			params += ', menubar=0';
			params += ', resizable=1';
			params += ', scrollbars=1';
			params += ', status=0';
			params += ', toolbar=0';
			return BrowserOpen(url, name, params);
		}
	}

}
