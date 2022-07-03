import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { CreateCommentRequest, DeleteCommentRequest, GetCommentsResponse } from './PostDetail.model';
import PostDetailRepository from './PostDetail.repository';

export const usePostDetailQuery = (postIdx: number) =>
  useQuery(['getPostDetail', postIdx], () => PostDetailRepository.getPost(postIdx), {
    enabled: !!postIdx,
  });

export const useCommentListQuery = (postIdx: number) => {
  return useInfiniteQuery<GetCommentsResponse, Error>(
    ['CommentList', postIdx],
    ({ pageParam = { page: 0, size: 5 } }) => PostDetailRepository.getComments({ postIdx, pageParam }),
    {
      enabled: !!postIdx,
      getNextPageParam: (lastPage, allPages) => {
        //리팩토링 확인
        const nowPage = Math.ceil(allPages.flatMap((data) => data.content).length / 5);
        if (lastPage.totalPages > nowPage) {
          return { page: nowPage, size: 5 };
        }
        return;
      },
    },
  );
};

export const useCreateCommentMutation = () => {
  return useMutation({
    mutationKey: 'CreateComment',
    mutationFn: (data: CreateCommentRequest) => PostDetailRepository.createComment(data),
  });
};

export const useDeleteCommentMutation = () => {
  return useMutation({
    mutationKey: 'DeleteComment',
    mutationFn: (data: DeleteCommentRequest) => PostDetailRepository.deleteComment(data),
  });
};
