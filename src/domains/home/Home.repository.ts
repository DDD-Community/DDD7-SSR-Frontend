import client from 'src/domains/shared/api/client';
import { GetPostsRequest, GetPostsResponse } from './Home.model';

class HomeRepository {
  async getPosts({ size, page }: GetPostsRequest): Promise<GetPostsResponse> {
    return client.get(`/posts/all?page=${page}&size=${size}`);
  }
}

export default new HomeRepository();
