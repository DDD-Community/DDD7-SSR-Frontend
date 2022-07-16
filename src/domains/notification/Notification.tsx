import { css } from '@emotion/react';
import NotiCard from '../shared/components/NotiCard/NotiCard';
import { Color, FontSize } from '../shared/constants';

const Notification = () => {
  return (
    <div css={notificationContainer}>
      <div css={notificationHeader}>
        <span>
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M0 22.54H22V0.54H0V22.54Z" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_745_903" transform="scale(0.015625)" />
              </pattern>
              <image
                id="image0_745_903"
                width="64"
                height="64"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </span>
        <span css={nitificationHeaderText}>알림</span>
      </div>
      <NotiCard />
      <NotiCard />
      <NotiCard />
      <NotiCard />
      <div>hello</div>
      <div>hello</div>
    </div>
  );
};

const notificationContainer = css`
  max-width: 703px;
  display: flex;
  flex-direction: column;
  margin: 56px auto 0;
`;

const notificationHeader = css`
  padding: 0 10px 0 10px;
  margin-bottom: 26px;
`;

const nitificationHeaderText = css`
  font-size: 24px;
  font-weight: bold;
  margin-left: 6px;
  color: ${Color.White100};
`;
export default Notification;