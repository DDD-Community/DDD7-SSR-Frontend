import client from 'src/domains/shared/api/client';
import { Friend, FriendRequest } from '../model/friends';

class ImageRepository {
  uploadPostImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('postImg', file);
    return client.post('/img/post', formData);
  }

  uploadProfileImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('profileImg', file);
    return client.post('/img/profile', formData);
  }

  uploadThumbnailImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('thumbnailImg', file);
    return client.post('/img/thumbnail', formData);
  }
}

export default new ImageRepository();
