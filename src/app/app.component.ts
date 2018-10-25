import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wysiwyg-editor';
  editorContent: string;
  postImg: string;

  options: any = {
    dragInline: false,
    tabSpaces: 4,
    theme: 'gray',
    fontFamilySelection: true,
    fontSizeSelection: true,
    paragraphFormatSelection: true,
    charCounterCount: false,
    fileInsertButtons: [],
    imageUploadURL: 'http://localhost:50540/api/feeds/UploadImage',
    fileUploadURL: 'http://localhost:50540/api/feeds/UploadFile',
    toolbarButtons: [
      'fontFamily', '|', 'fontSize', '|',
      'color', '|',
      'bold', 'italic', 'underline', 'subscript', 'superscript', '|',
      'align', 'verticalAlign', '|',
      'formatOL', 'formatUL', 'indent', 'outdent', '|',
      'insertHR', 'specialCharacters', 'insertTable', 'insertImage', 'insertFile', '|',
      'undo', 'redo', 'help'
    ],
    enableScript: false,
    placeholderText: 'คุณกำลังคิดอะไรอยู่...',
    events: {
    },
  };


}
