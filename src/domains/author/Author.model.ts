import { PostDetail } from '../shared/model/post';
import { PaginationData } from '../shared/model/shared';

export type TabValues = 'author' | 'post' | 'crew' | 'tag';

export type AuthorPostList = PaginationData<PostDetail>;
