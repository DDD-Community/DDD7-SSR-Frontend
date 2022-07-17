import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { useEffect, useRef } from 'react';
import { Text } from '../Text';
import { Spacing } from '..';
import { css } from '@emotion/react';
import { Color } from '../../constants';
import { EditorMode } from './EditorType';
import { useBreakPointStore } from '../../store/breakPoint';
import { useUploadPostImageMutation } from '../../queries/image';

export interface EditorWithForwardedProps extends EditorProps {
  onChange: (value: string) => void;
  onChangeMode?: (type: EditorMode) => void;
  editorMode?: EditorMode;
}

const EditorWithForwarded = ({ onChange, onChangeMode, editorMode, ...props }: EditorWithForwardedProps) => {
  const ref = useRef<Editor>(null);
  const uploadPostImageMutation = useUploadPostImageMutation();

  const handleChange = () => {
    const writerInstance = ref.current?.getInstance();
    const writerContent = writerInstance?.isMarkdownMode ? writerInstance?.getMarkdown() : writerInstance?.getHTML();
    onChange(writerContent || '');
  };

  const handleModeChange = (mode: EditorMode) => {
    ref.current?.getInstance().changeMode(mode);
    onChangeMode?.(mode);
  };

  useEffect(() => {
    if (ref.current) {
      const instance = ref.current.getInstance();
      instance.moveCursorToEnd();

      if (!props.initialValue) {
        instance.setMarkdown('');
      }

      instance.removeHook('addImageBlobHook');
      instance.addHook('addImageBlobHook', (file, callback, test) => {
        uploadPostImageMutation.mutate(file, {
          onSuccess: (url) => {
            callback(url, file.name);
          },
        });
        // https://velog.io/@developerjhp/Toast-UI-Editor%EC%97%90%EC%84%9C-s3%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
        // https://myeongjae.kim/blog/2020/04/05/tui-editor-with-nextjs
      });
    }
  }, []);

  useEffect(() => {
    if (editorMode) {
      ref.current?.getInstance().changeMode(editorMode);
    }
  }, [editorMode]);

  return (
    <section css={editorSectionStyle}>
      <Editor
        {...props}
        onChange={handleChange}
        hideModeSwitch={true}
        previewStyle="vertical"
        theme="dark"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        ref={ref}
        autofocus
      />

      {!props.hideModeSwitch && editorMode === 'markdown' && <div css={ViewerTopBlindScreenStyle}></div>}

      {!props.hideModeSwitch && (
        <div css={modeSwitchWrapperStyle}>
          <button type="button" onClick={() => handleModeChange('markdown')}>
            <Text type="body14" color={editorMode === 'markdown' ? 'White100' : 'Gray650'}>
              MarkDown
            </Text>
          </button>

          <button type="button" onClick={() => handleModeChange('wysiwyg')}>
            <Text type="body14" color={editorMode === 'wysiwyg' ? 'White100' : 'Gray650'}>
              Wysiwyg
            </Text>
          </button>
        </div>
      )}
    </section>
  );
};

export default EditorWithForwarded;

const editorSectionStyle = css`
  position: relative;
`;

const ViewerTopBlindScreenStyle = css`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 49%;
  height: 48px;
  background-color: ${Color.Gray850};
`;

const modeSwitchWrapperStyle = css`
  display: flex;
  justify-content: flex-end;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 9px 15px;
    border: 1px solid ${Color.Gray650};
    border-top: none;
    border-bottom-left-radius: 8px;
    cursor: pointer;

    & + button {
      border: 1px solid ${Color.Gray650};
      border-top: none;
      border-left: none;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 8px;
    }
  }
`;
