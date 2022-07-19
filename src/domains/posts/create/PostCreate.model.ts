import { PostCreate } from 'src/domains/shared/model/post';

export interface CreatePostData extends PostCreate {}

export interface UpdatePostRequest {
  postIdx: number;
  data: CreatePostData;
}
