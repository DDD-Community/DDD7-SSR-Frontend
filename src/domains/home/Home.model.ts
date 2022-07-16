import { PostDetail } from '../shared/model/post';
import { PaginationData } from '../shared/model/shared';
import { priodType } from './Home';

export interface GetPostsRequest {
  size: number;
  page: number;
  isTrend: boolean;
  period: priodType;
}

export type GetPostsResponse = PaginationData<PostDetail[]>;
