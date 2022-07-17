import styled from '@emotion/styled';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { PostDetail } from '../../model/post';
import { PostCard } from '../PostCard';

interface PostGridProps {
  contents: PostDetail[];
  loadMore: () => void;
}

export const PostGrid = ({ contents, loadMore }: PostGridProps) => {
  const { containerRef } = useInfiniteScroll({ dataLength: contents?.length, loadMore });

  return (
    <PostWrapperStyle ref={containerRef}>
      {contents.map((post) => (
        <PostCard key={post.postIdx} data={post} />
      ))}
    </PostWrapperStyle>
  );
};

const PostWrapperStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 296px);
  gap: 21px;
  max-width: 1256px;
  width: 100%;
`;
