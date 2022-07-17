import { Comment } from 'src/domains/posts/detail/PostDetail.model';

export interface CommentListProps {
  totalCounts?: number;
  comments: Comment[];
  isLoadMore?: boolean;
  onLoadMore?: () => void;
  handleDeleteComment: (commentId: number) => void;
  userId?: number;
}
