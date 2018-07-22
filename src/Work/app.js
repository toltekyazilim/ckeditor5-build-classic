// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import InlineEditor from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";
// BalloonEditor (medium-like)

// plugins
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Image from "@ckeditor/ckeditor5-image/src/image";

// toolbar
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";

// custom plugin
import InsertImagePlugin, {insertImageToolbarName} from './insertImagePlugin';


InlineEditor.create(document.querySelector("#inlineEditor"), {
  plugins: [Essentials, Paragraph, Bold, Italic, Image, InsertImagePlugin],
  toolbar: ["bold", "italic", insertImageToolbarName]
})
  .then(editor => {
    console.log("Editor was initialized", editor);

    // Inheritance chain
    // StandardEditor.Editor.getData()
    console.log("Editor data", editor.getData());
  })
  .catch(error => {
    console.error(error.stack);
  });
