import { useMutation, useQuery } from 'react-query';
import { CreatePostData } from './PostCreate.model';
import PostCreateRepository from './PostCreate.repository';

export const usePostCreateMutation = () => {
  return useMutation({
    mutationKey: 'CreatePost',
    mutationFn: (data: CreatePostData) => PostCreateRepository.createPost(data),
  });
};
