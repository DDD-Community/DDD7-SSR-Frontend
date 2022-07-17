import { css } from '@emotion/react';
import Image from 'next/image';
import NotiCard from '../shared/components/NotiCard/NotiCard';
import { Color } from '../shared/constants';

const Notification = () => {
  return (
    <div css={notificationContainer}>
      <div css={notificationHeader}>
        <span>
          <Image src="/bell.png" alt="login-icon" width={22} height={22} />
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
  display: flex;
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
