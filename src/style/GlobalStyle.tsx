import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { GlobalEditorStyle } from './GlobalEditorStyle';
import { GlobalModalStyle } from './GlobalModalStyle';
import { GlobalToastStyle } from './GlobalToastStyle';

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 100;
        src: url(/fonts/NotoSansKR-Thin.otf) format('opentype');
      }
      @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 300;
        src: url(/fonts/NotoSansKR-Light.otf) format('opentype');
      }
      @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        src: url(/fonts/NotoSansKR-Regular.otf) format('opentype');
      }
      @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        src: url(/fonts/NotoSansKR-Medium.otf) format('opentype');
      }
      @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        src: url(/fonts/NotoSansKR-Bold.otf) format('opentype');
      }
      @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 900;
        src: url(/fonts/NotoSansKR-Black.otf) format('opentype');
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        font-family: 'Noto Sans KR', 'Inter', sans-serif;
      }

      body,
      #__next {
        height: 100%;
        background-color: #191a1c;
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
