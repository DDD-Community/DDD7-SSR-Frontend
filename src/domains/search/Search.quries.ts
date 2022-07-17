import { useInfiniteQuery } from 'react-query';
import { SearchAccountList, SearchPostList } from './Search.model';
import SearchRepository from './Search.repository';

export const useSearchPostsQuery = (searchText: string, enabled: boolean) =>
  useInfiniteQuery<SearchPostList, Error>(
    ['SearchPosts', searchText],
    ({ pageParam = { page: 0, size: 20 } }) => SearchRepository.searchPosts(searchText, pageParam),
    {
      enabled,
      getNextPageParam: (lastPage, allPages) => {
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 20);
        if (lastPage.totalPages > nowPage) {
          return { page: nowPage, size: 20 };
        }

        return;
      },
    },
  );

export const useSearchAccountsQuery = (searchText: string, enabled: boolean) =>
  useInfiniteQuery<SearchAccountList, Error>(
    ['SearchAccounts', searchText],
    ({ pageParam = { page: 0, size: 20 } }) => SearchRepository.searchAccounts(searchText, pageParam),
    {
      enabled,
      getNextPageParam: (lastPage, allPages) => {
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 20);
        if (lastPage.totalPages > nowPage) {
          return { page: nowPage, size: 20 };
        }

        return;
      },
    },
  );
