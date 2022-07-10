import { PostDetail } from '../shared/model/post';
import { PaginationData } from '../shared/model/shared';

export type TabValues = 'author' | 'post' | 'crew' | 'tag';

export interface AuthorProfileDetail {
  accountIdx: number;
  profileImg?: string;
  profileId: string;
  name: string;
  introduction: string;
  email: string;

  commentCount: number;
  crewCount: number;
  postCount: number;

  crew: boolean;
  owner: boolean;
}

export type AuthorPostList = PaginationData<PostDetail>;
