import { PaginationData } from 'src/domains/shared/model/shared';

export interface Comment {
  commentIdx: number;
  postIdx: number;
  account: {
    accountIdx: number;
    alarmAg: string;
    createDate: string;
    email: string;
    emailAg: string;
    name: string;
    platform: string;
    profileImg: string;
    role: string;
    updateDate: string;
    withdrawal: string;
  };
  comment: string;
  createDate: string;
  updateDate: string;
}

export interface CommentProps extends Comment {
  isOwner?: boolean;

  onDeleteComment: (commentIdx: number) => void;
}

export interface DeleteCommentRequest {
  postIdx: number;
  commentIdx?: number;
}

export interface GetCommentRequest {
  postIdx: number;
  pageParam: {
    size: number;
    page: number;
  };
}

export type GetCommentsResponse = PaginationData<Comment[]>;

export interface CreateCommentRequest {
  postIdx: number;
  accountIdx: number;
  comment: string;
}
