import client from 'src/domains/shared/api/client';
import { AuthorPostList, AuthorProfileDetail } from './Author.model';

class AuthorRepository {
  async getAuthorDetail(accountIdx: number): Promise<AuthorProfileDetail> {
    return client.get(`/account/${accountIdx}`);
  }

  async getAuthorPostList(
    accountIdx: number,
    tab: 'post' | 'tag',
    pageParam: { page: number; size: number },
  ): Promise<AuthorPostList> {
    return client.get(`/account/${accountIdx}/posts/${tab}?page=${pageParam.page}&size=${pageParam.size}`);
  }
}

export default new AuthorRepository();
