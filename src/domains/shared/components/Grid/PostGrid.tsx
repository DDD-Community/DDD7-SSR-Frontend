import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { PostDetail } from '../../model/post';
import { PostCard } from '../PostCard';
import { GridProps } from './GridType';

interface PostGridProps {
  contents: PostDetail[];
  loadMore: () => void;
}

export const PostGrid = ({ contents, loadMore }: PostGridProps) => {
  const { containerRef } = useInfiniteScroll({ dataLength: contents?.length, loadMore });

  return (
    <PostWrapperStyle ref={containerRef} isFullWidth={contents.length > 2}>
      {contents.map((post) => (
        <PostCard key={post.postIdx} data={post} />
      ))}
    </PostWrapperStyle>
  );
};

const PostWrapperStyle = styled.div(
  ({ isFullWidth }: GridProps) => css`
    display: grid;
    justify-content: ${isFullWidth ? 'center' : 'flex-start'};
    grid-template-columns: repeat(auto-fit, 296px);
    gap: 21px;
    width: 100%;
    max-width: 1256px;

    ${BreakPoint.Mobile()} {
      justify-content: center;
    }
  `,
);
