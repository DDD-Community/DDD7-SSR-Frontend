import { PostDetail } from '../shared/model/post';
import { PaginationData } from '../shared/model/shared';

export interface GetPostsRequest {
  size: number;
  page: number;
}

export type GetPostsResponse = PaginationData<PostDetail[]>;
