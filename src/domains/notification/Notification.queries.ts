import { useInfiniteQuery } from 'react-query';
import { GetNotificationsResponse } from './Notification.model';
import NotificationRepository from './Notification.repository';

export const useGetNotificationsQuery = () => {
  return useInfiniteQuery<GetNotificationsResponse, Error>(
    ['GetNotification'],
    ({ pageParam = { page: 0, size: 20 } }) => NotificationRepository.getNotifications(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        //리팩토링 확인
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 20);
        if (lastPage.totalPages > nowPage) {
          return { page: nowPage, size: 20 };
        }

        return;
      },
    },
  );
};
