import { css } from '@emotion/react';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { EmptyContent, Loading } from '../shared/components';
import CardRowList from '../shared/components/CardRowList/CardRowList';
import NotiCard from '../shared/components/NotiCard/NotiCard';
import { Color } from '../shared/constants';
import useInfiniteScroll from '../shared/hooks/useInfiniteScroll';
import { useGetNotificationsQuery } from './Notification.queries';

const Notification = () => {
  const getNotificationsQuery = useGetNotificationsQuery();
  const notiList = useMemo(
    () => getNotificationsQuery.data?.pages.flatMap((noti) => noti.content),
    [getNotificationsQuery.data],
  );
  const loadMoreNoti = useCallback(() => getNotificationsQuery.fetchNextPage(), []);

  const isLoading = getNotificationsQuery.isLoading;

  return (
    <div css={notificationContainer}>
      <div css={notificationHeader}>
        <span>
          <Image src="/bell.png" alt="login-icon" width={22} height={22} />
        </span>
        <span css={nitificationHeaderText}>알림</span>
      </div>

      {isLoading && <Loading />}
      {notiList?.length === 0 && <EmptyContent description="알림 내용이 존재하지 않습니다." />}
      {!isLoading && notiList && <CardRowList contents={notiList} loadMore={loadMoreNoti} />}
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
