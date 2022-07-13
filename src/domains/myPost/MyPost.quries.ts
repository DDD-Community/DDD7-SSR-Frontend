import { useInfiniteQuery } from 'react-query';
import { MyPostDisplay, MyPostList } from './MyPost.model';
import MyPostRepository from './MyPost.repository';

export const useMyPostListQuery = (display: MyPostDisplay) =>
  useInfiniteQuery<MyPostList, Error>(
    ['GetMyPostList', display],
    ({ pageParam = { page: 0, size: 20 } }) => MyPostRepository.getMyPostList(display, pageParam),
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
