import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = ({ initialValue, handleEditorChange }) => {
  return (
    <Editor
      apiKey="bmndj8lgd9jwnb06fd0skz9rfhbq4ozqerqcwgtoyyxsweds"
      initialValue={initialValue}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
