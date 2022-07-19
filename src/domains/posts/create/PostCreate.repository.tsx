import client from 'src/domains/shared/api/client';
import { PostDetail } from 'src/domains/shared/model/post';
import { CreatePostData } from './PostCreate.model';

class PostCreateRepository {
  createPost(data: CreatePostData): Promise<PostDetail> {
    return client.post('/post', data);
  }

  updatePost(postIdx: number, data: CreatePostData): Promise<PostDetail> {
    console.log('데이터', data);
    return client.put(`/post/${postIdx}`, data);
  }
}

export default new PostCreateRepository();
