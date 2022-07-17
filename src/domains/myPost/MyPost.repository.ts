import client from 'src/domains/shared/api/client';
import { MyPostDisplay, MyPostList } from './MyPost.model';

class MyPostRepository {
  async getMyPostList(display: MyPostDisplay, pageParam: { page: number; size: number }): Promise<MyPostList> {
    return client.get(`/account/posts/${display}?page=${pageParam.page}&size=${pageParam.size}`);
  }
}

export default new MyPostRepository();
