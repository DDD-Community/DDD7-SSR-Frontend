import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { ReactElement, useCallback, useEffect, useState } from 'react';

export default function PostView() {
  const [postViewer, setPostViewer] = useState<ReactElement | null>(null);

  const getViewerDynamic = useCallback(async () => {
    const { Viewer } = await import('@toast-ui/react-editor');
    const codeSyntaxHighlight = await import('@toast-ui/editor-plugin-code-syntax-highlight');

    setPostViewer(
      <Viewer initialValue="## testetstst" plugins={[[codeSyntaxHighlight.default, { highlighter: Prism }]]} />,
    );
  }, []);

  useEffect(() => {
    getViewerDynamic();
  }, []);

  return postViewer;
}
