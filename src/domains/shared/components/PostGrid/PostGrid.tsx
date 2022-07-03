import styled from '@emotion/styled';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { PostCard } from '../PostCard';
import { PostGridProps } from './PostGridType';

const PostGrid = ({ contents, loadMore }: PostGridProps) => {
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
  width: 1256px;
`;

export default PostGrid;
