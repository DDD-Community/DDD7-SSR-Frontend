import { css } from '@emotion/react';
import React, { useMemo } from 'react';
import { PostGrid } from '../shared/components/PostGrid';
import { useGetPostsQuery } from './Home.queries';

const Home = () => {
  const getPostsQuery = useGetPostsQuery();
  const postList = useMemo(() => getPostsQuery.data?.pages.flatMap((posts) => posts.content), [getPostsQuery.data]);
  const loadMorePost = () => getPostsQuery.fetchNextPage();

  return <div css={HomeGridLayout}>{postList && <PostGrid contents={postList} loadMore={loadMorePost} />}</div>;
};

export default Home;

const HomeGridLayout = css`
  display: flex;
  justify-content: center;
  max-width: 1256px;
  margin-top: 131px;
  margin-left: auto;
  margin-right: auto;
`;
