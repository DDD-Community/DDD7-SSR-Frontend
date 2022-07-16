import { useInfiniteQuery, useQuery } from 'react-query';
import { filteredType } from './Home';
import { GetPostsResponse } from './Home.model';
import HomeRepository from './Home.repository';

export const useGetPostsQuery = (filteredState: filteredType) => {
  return useInfiniteQuery<GetPostsResponse, Error>(
    ['GetPosts', filteredState.isTrend, filteredState.period],
    ({ pageParam = { page: 0, size: 20, ...filteredState } }) => HomeRepository.getPosts(pageParam),
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
