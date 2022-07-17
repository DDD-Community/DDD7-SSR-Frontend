import client from 'src/domains/shared/api/client';
import { GetPostsRequest, GetPostsResponse } from './Home.model';

class HomeRepository {
  async getPosts({ size, page, isTrend, period }: GetPostsRequest): Promise<GetPostsResponse> {
    if (isTrend) return client.get(`/posts/${!isTrend ? 'all' : period}?page=${page}&size=${size}&sort=boardCount`);
    return client.get(`/posts/all?page=${page}&size=${size}&sort=createDate`);
  }
}

export default new HomeRepository();
