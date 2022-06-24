import { css } from '@emotion/react';
import React from 'react';
import { PostGrid } from '../shared/components/PostGrid';
import { useGetPostsQuery } from './Home.queries';

const Home = () => {
  const getPostsQuery = useGetPostsQuery();

  return (
    <div css={HomeGridLayout}>
      {getPostsQuery.data && (
        <PostGrid contents={getPostsQuery.data.content.filter((content) => content.thumbnailImg?.includes('http'))} />
      )}
    </div>
  );
};

const HomeGridLayout = css`
  display: flex;
  justify-content: center;
  max-width: 1256px;
  margin-top: 131px;
  margin-left: auto;
  margin-right: auto;
`;
export default Home;
