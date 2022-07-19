import client from 'src/domains/shared/api/client';
import { PostCreate, PostDetail } from 'src/domains/shared/model/post';
import { CreateCommentRequest, DeleteCommentRequest, GetCommentRequest, GetCommentsResponse } from './PostDetail.model';

class PostDetailRepository {
  getPost(postIdx: number): Promise<PostDetail> {
    return client.get(`/post/${postIdx}`);
  }

  deletePost(postIdx: number) {
    return client.delete(`/post/${postIdx}`);
  }

  getComments({ postIdx, pageParam }: GetCommentRequest): Promise<GetCommentsResponse> {
    return client.get(`/post/${postIdx}/comments?size=${pageParam?.size}&page=${pageParam?.page}&sort=createDate`);
  }

  createComment({ accountIdx, comment, postIdx }: CreateCommentRequest): Promise<Comment> {
    return client.post(`/post/${postIdx}/comment`, {
      accountIdx,
      comment,
    });
  }

  deleteComment({ postIdx, commentIdx }: DeleteCommentRequest): Promise<void> {
    return client.delete(`/post/${postIdx}/comment/${commentIdx}`);
  }

  // async updateComment({ postIdx, commentIdx, data }: CommentMutationRequest) {
  //   return client.put(`/post/${postIdx}/comment/${commentIdx}`, {});
  // }
}

export default new PostDetailRepository();
