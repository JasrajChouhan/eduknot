import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef , useEffect } from 'react';

export default function EditorFile({ onContentChange }) {

  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setContent(''); 
    }
  }, []);
  const handleEditorChange = (content, editor) => {
    if (onContentChange) {
      onContentChange(content); 
    }
  };


  return (
    <Editor
      apiKey='8v2sdpuu8md3c9j9ckf0u74m15r48lybfl1jbqpjohtcbj8b'
      init={{
        placeholder: 'Enter your text here...',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
        
      }}
      onEditorChange={handleEditorChange}
      
      initialValue=""
      
    />
  );
}