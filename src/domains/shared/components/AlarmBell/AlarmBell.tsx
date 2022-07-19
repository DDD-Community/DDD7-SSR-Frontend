import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import client from '../../api/client';

const AlarmBell = () => {
  const [hasNew, setHasNew] = useState(false);
  const router = useRouter();

  const getHasNewNotiOrNot = async () => {
    const hasNewNoti = await client.get('/friends/notice/exists');
    setHasNew(hasNewNoti);
  };

  useEffect(() => {
    getHasNewNotiOrNot();
  }, [router]);

  return (
    <div css={alarmBellContainer} onClick={() => router.push('/notification')}>
      <div css={alarmBell}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0001 19.2728H19.6365V9.76487C19.6365 5.92458 16.7867 2.73775 13.091 2.20684V1.45462C13.091 0.852145 12.6026 0.363708 12.0001 0.363708C11.3976 0.363708 10.9092 0.852145 10.9092 1.45462V2.20684C7.21347 2.73782 4.36373 5.92458 4.36373 9.76487V19.2728H4.00009C3.39762 19.2728 2.90918 19.7612 2.90918 20.3637C2.90918 20.9662 3.39762 21.4546 4.00009 21.4546H8.915C9.3654 22.7243 10.5779 23.6364 12.0001 23.6364C13.4223 23.6364 14.6348 22.7243 15.0852 21.4546H20.0001C20.6026 21.4546 21.091 20.9662 21.091 20.3637C21.091 19.7612 20.6026 19.2728 20.0001 19.2728ZM6.54554 9.76487C6.54554 6.75724 8.99245 4.3104 12.0001 4.3104C15.0077 4.3104 17.4546 6.75724 17.4546 9.76487V19.2728H6.54554V9.76487Z"
            fill="white"
          />
          {hasNew && <circle cx="22" cy="2" r="2" fill="#3C6EEB" />}
        </svg>
      </div>
    </div>
  );
};

const alarmBellContainer = css`
  position: relative;
`;

const alarmBell = css`
  margin-top: 3px;
  cursor: pointer;
`;

export default AlarmBell;
