import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { GlobalEditorStyle } from './GlobalEditorStyle';
import { GlobalModalStyle } from './GlobalModalStyle';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body,
      #__next {
        height: 100%;
        background-color: #191a1c;
      }

      body.Overflow--hidden {
        overflow-y: hidden;
      }

      ${emotionNormalize}
      ${GlobalEditorStyle}
      ${GlobalModalStyle}
    `}
  />
);

export default GlobalStyle;
