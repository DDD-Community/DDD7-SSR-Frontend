import styled from '@emotion/styled';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { BreakPoint } from '../../hooks/useMediaQuery';
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
  grid-template-columns: repeat(auto-fit, 296px);
  gap: 21px;
  width: 100%;

  ${BreakPoint.Mobile()} {
    justify-content: center;
  }
`;
