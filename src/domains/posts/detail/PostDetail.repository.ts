import client from 'src/domains/shared/api/client';
import { PostDetail } from 'src/domains/shared/model/post';
import { CreateCommentRequest, DeleteCommentRequest, GetCommentRequest, GetCommentsResponse } from './PostDetail.model';

class PostDetailRepository {
  async getPost(postId: number): Promise<PostDetail> {
    return client.get(`/post/${postId}`);
  }

  async getComments({ postIdx, pageParam }: GetCommentRequest): Promise<GetCommentsResponse> {
    return client.get(`/post/${postIdx}/comments?size=${pageParam?.size}&page=${pageParam?.page}&sort=createDate`);
  }

  async createComment({ accountIdx, comment, postIdx }: CreateCommentRequest): Promise<Comment> {
    return client.post(`/post/${postIdx}/comment`, {
      accountIdx,
      comment,
    });
  }

  async deleteComment({ postIdx, commentIdx }: DeleteCommentRequest): Promise<void> {
    return client.delete(`/post/${postIdx}/comment/${commentIdx}`);
  }

  // async updateComment({ postIdx, commentIdx, data }: CommentMutationRequest) {
  //   return client.put(`/post/${postIdx}/comment/${commentIdx}`, {});
  // }
}

export default new PostDetailRepository();
