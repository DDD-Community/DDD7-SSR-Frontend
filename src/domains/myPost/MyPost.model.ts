import { PostDetail } from '../shared/model/post';
import { PaginationData } from '../shared/model/shared';

export type MyPostDisplay = 'private' | 'public';
export type MyPostList = PaginationData<PostDetail>;
