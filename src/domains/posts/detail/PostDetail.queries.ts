import { useQuery } from 'react-query';
import PostDetailRepository from './PostDetail.repository';

export const usePostDetailQuery = (postId: string) =>
  useQuery(['getPostDetail', postId], () => PostDetailRepository.getPost(postId), {
    enabled: !!postId,
  });
