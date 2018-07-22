import Command from '@ckeditor/ckeditor5-core/src/command';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
export default class ImageInsertCommand extends Command {
	execute(imageUrl) {
		const editor = this.editor;
		const imageElement = new ModelElement('image', {
			src: imageUrl
		});
		editor.model.insertContent(imageElement, editor.model.document.selection); 
	}
}
