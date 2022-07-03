import { useMutation } from 'react-query';
import ImageRepository from '../repository/image';

export const useUploadPostImageMutation = () => {
  return useMutation({
    mutationFn: (file: File) => ImageRepository.uploadPostImage(file),
  });
};

export const useUploadProfileImageMutation = () => {
  return useMutation({
    mutationFn: (file: File) => ImageRepository.uploadProfileImage(file),
  });
};

export const useUploadThumbnailImageMutation = () => {
  return useMutation({
    mutationFn: (file: File) => ImageRepository.uploadThumbnailImage(file),
  });
};
