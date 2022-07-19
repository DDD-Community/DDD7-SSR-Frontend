import { useMutation, useQuery } from 'react-query';
import { CreatePostData, UpdatePostRequest } from './PostCreate.model';
import PostCreateRepository from './PostCreate.repository';

export const usePostCreateMutation = () => {
  return useMutation({
    mutationKey: 'CreatePost',
    mutationFn: (data: CreatePostData) => PostCreateRepository.createPost(data),
  });
};

export const usePostUpdateMutation = () => {
  return useMutation({
    mutationKey: 'UpdatePost',
    mutationFn: ({ postIdx, data }: UpdatePostRequest) => PostCreateRepository.updatePost(postIdx, data),
  });
};
