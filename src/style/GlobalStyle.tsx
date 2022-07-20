import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { GlobalEditorStyle } from './GlobalEditorStyle';
import { GlobalModalStyle } from './GlobalModalStyle';
import { GlobalToastStyle } from './GlobalToastStyle';

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
        font-family: -apple-system, sans-serif;
      }

      body.Overflow--hidden {
        overflow-y: hidden;
      }

      ul {
        list-style: none;
      }

      ${emotionNormalize}
      ${GlobalEditorStyle}
      ${GlobalModalStyle}
      ${GlobalToastStyle}
    `}
  />
);

export default GlobalStyle;
