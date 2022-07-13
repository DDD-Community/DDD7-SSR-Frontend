import client from 'src/domains/shared/api/client';
import { AuthorPostList } from './Author.model';

class AuthorRepository {
  async getAuthorPostList(
    accountIdx: number,
    tab: 'post' | 'tag',
    pageParam: { page: number; size: number },
  ): Promise<AuthorPostList> {
    return client.get(`/account/${accountIdx}/posts/${tab}?page=${pageParam.page}&size=${pageParam.size}`);
  }
}

export default new AuthorRepository();
