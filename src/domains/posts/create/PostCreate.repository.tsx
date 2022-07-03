import client from 'src/domains/shared/api/client';
import { PostDetail } from 'src/domains/shared/model/post';
import { CreatePostData } from './PostCreate.model';

class PostCreateRepository {
  async createPost(data: CreatePostData): Promise<PostDetail> {
    return client.post('/post', data);
  }
}

export default new PostCreateRepository();
