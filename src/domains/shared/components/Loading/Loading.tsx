import { css } from '@emotion/react';
import React from 'react';
import { Color } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';

export const Loading = () => {
  return (
    <section css={loadingContainerStyle}>
      <div css={loadingStyle} />
    </section>
  );
};

const loadingContainerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const loadingStyle = css`
  margin: 20px auto;
  color: ${Color.Primary100};
  width: 55px;
  height: 35px;
  --d: radial-gradient(farthest-side, currentColor 90%, #0000);
  background: var(--d), var(--d), var(--d);
  background-size: 14px 14px;
  background-repeat: no-repeat;
  animation: m 1s infinite alternate;

  ${BreakPoint.Mobile()} {
    width: 48px;
    height: 25px;
    background-size: 12px 12px;
  }

  @keyframes m {
    0% {
      background-position: calc(0 * 100% / 2) 60%, calc(1 * 100% / 2) 40%, calc(2 * 100% / 2) 40%;
    }
    20% {
      background-position: calc(0 * 100% / 2) 20%, calc(1 * 100% / 2) 40%, calc(2 * 100% / 2) 40%;
    }
    40% {
      background-position: calc(0 * 100% / 2) 60%, calc(1 * 100% / 2) 20%, calc(2 * 100% / 2) 40%;
    }
    60% {
      background-position: calc(0 * 100% / 2) 40%, calc(1 * 100% / 2) 60%, calc(2 * 100% / 2) 20%;
    }
    80% {
      background-position: calc(0 * 100% / 2) 40%, calc(1 * 100% / 2) 40%, calc(2 * 100% / 2) 60%;
    }
    100% {
      background-position: calc(0 * 100% / 2) 40%, calc(1 * 100% / 2) 40%, calc(2 * 100% / 2) 40%;
    }
  }
`;
