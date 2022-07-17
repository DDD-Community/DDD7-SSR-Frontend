import client from 'src/domains/shared/api/client';
import { SearchAccountList, SearchPostList } from './Search.model';

class SearchRepository {
  searchPosts(searchText: string, pageParam: { page: number; size: number }): Promise<SearchPostList> {
    return client.get(`/search/posts/${searchText}?page=${pageParam.page}&size=${pageParam.size}`);
  }

  searchAccounts(searchText: string, pageParam: { page: number; size: number }): Promise<SearchAccountList> {
    return client.get(`/search/accounts/${searchText}?page=${pageParam.page}&size=${pageParam.size}`);
  }
}

export default new SearchRepository();
