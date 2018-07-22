import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

import Adapter from './adapter';

export default class ImageUploader extends Plugin {

    static get requires() {
        return [FileRepository];
    }

    static get pluginName() {
        return 'ImageUploader';
    }

    init() {
		const url = this.editor.config.get('ImageUploader.uploadUrl');

        if (!url) {
			console.warn('ImageUploader.uploadUrl is not configured')
            return;
        }

        this.editor.plugins.get('FileRepository').createUploadAdapter = loader => new Adapter(loader, url, this.editor.t);
    }
}
