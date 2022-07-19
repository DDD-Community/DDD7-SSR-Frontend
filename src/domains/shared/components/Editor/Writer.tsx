import React from 'react';
import dynamic from 'next/dynamic';
import { EditorWithForwardedProps } from './EditorWithForwarded';

const Editor = dynamic<EditorWithForwardedProps>(() => import('./EditorWithForwarded'), { ssr: false });

const Writer: React.FC<EditorWithForwardedProps> = ({
  initialValue,
  onChange,
  height,
  editorMode,
  hideModeSwitch,
  onChangeMode,
  isUpdateMode,
}) => {
  return (
    <Editor
      onChange={onChange}
      initialValue={initialValue}
      height={height}
      editorMode={editorMode}
      hideModeSwitch={hideModeSwitch}
      onChangeMode={onChangeMode}
      isUpdateMode={isUpdateMode}
    />
  );
};

export default Writer;
