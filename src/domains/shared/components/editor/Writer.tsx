import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import '@toast-ui/editor/dist/toastui-editor.css';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { ReactElement, useCallback, useEffect, useState } from 'react';

export default function Writer() {
  const [postEditor, setPostEditor] = useState<ReactElement | null>(null);

  const getEditorDynamic = useCallback(async () => {
    const { Editor } = await import('@toast-ui/react-editor');
    const codeSyntaxHighlight = await import('@toast-ui/editor-plugin-code-syntax-highlight');
    const colorSyntax = await import('@toast-ui/editor-plugin-color-syntax');

    setPostEditor(
      <Editor
        previewStyle="vertical"
        plugins={[[codeSyntaxHighlight.default, { highlighter: Prism }], colorSyntax.default]}
      />,
    );
  }, []);

  useEffect(() => {
    getEditorDynamic();

    // import('@toast-ui/react-editor').then(({ Editor }) =>
    //   setPostEditor(
    //     <Editor
    //       plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
    //     />
    //   )
    // );
  }, []);

  return postEditor;
}
