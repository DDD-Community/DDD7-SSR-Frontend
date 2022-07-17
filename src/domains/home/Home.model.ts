import { PostDetail } from '../shared/model/post';
import { PaginationData } from '../shared/model/shared';
import { periodType } from './Home';

export interface GetPostsRequest {
  size: number;
  page: number;
  isTrend: boolean;
  period: periodType;
}

export type GetPostsResponse = PaginationData<PostDetail[]>;
