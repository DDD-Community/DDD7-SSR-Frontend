import { PostDetail } from '../../model/post';

export interface PostGridProps {
  contents: PostDetail[];
  loadMore: () => void;
}
