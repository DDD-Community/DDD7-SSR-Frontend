import { css } from '@emotion/react';

export const GlobalModalStyle = css`
  .Modal__portal {
    display: block;
  }

  .Modal__html--open {
    overflow-y: hidden;
  }
  /*
    Overlay
  */

  .Modal__overlay {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    position: fixed;
    overflow-y: auto;
    /* prettier-ignore */
    background-color: rgba(0,0,0,0.8);
    text-align: center;
  }

  .Modal__overlay--after-open {
    opacity: 1;
  }

  .Modal__overlay--before-close {
    opacity: 0;
  }

  /*
    Overlay if modal is centered
  */

  .Modal__overlay--centered:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
  }

  .Modal__overlay--centered .Modal__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /*
    Modal wrap
  */

  .Modal__wrap {
    z-index: 101;
    position: relative;
    padding: 0;
    display: inline-block;
    margin: 0 auto;
    text-align: left;
    outline: none;
  }

  .Modal__wrap--full {
    width: 100%;
    height: 100%;
  }

  .Modal__wrap--after-open .Modal {
    transform: scale(1);
    opacity: 1;
  }

  .Modal__wrap--before-close .Modal {
    opacity: 0.5;
    transform: scale(0.85);
  }
`;
