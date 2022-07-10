import { useInfiniteQuery, useQuery } from 'react-query';
import { AuthorPostList } from './Author.model';
import AuthorRepository from './Author.repository';

export const useAuthorDetailQuery = (accountIdx: number) =>
  useQuery(['GetAuthorDetail', accountIdx], () => AuthorRepository.getAuthorDetail(accountIdx), {
    enabled: !!accountIdx,
  });

export const useAuthorPostListQuery = (accountIdx: number) =>
  useInfiniteQuery<AuthorPostList, Error>(
    ['GetAuthorPostList', accountIdx],
    ({ pageParam = { page: 0, size: 20 } }) => AuthorRepository.getAuthorPostList(accountIdx, 'post', pageParam),
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

export const useAuthorTaggedPostListQuery = (accountIdx: number) =>
  useInfiniteQuery<AuthorPostList, Error>(
    ['GetAuthorTaggedPostList', accountIdx],
    ({ pageParam = { page: 0, size: 20 } }) => AuthorRepository.getAuthorPostList(accountIdx, 'post', pageParam),
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
