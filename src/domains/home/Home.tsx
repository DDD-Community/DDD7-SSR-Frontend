import { css } from '@emotion/react';
import React from 'react';
import { PostGrid } from '../shared/components/PostGrid';
import { PostDetail } from '../shared/model/post';
import { useGetPostsQuery } from './Home.queries';

const Home = () => {
  const getPostsQuery = useGetPostsQuery();

  const postsMock = {
    content: [
      {
        postIdx: 7,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 8,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 9,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 10,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 11,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
    ],
  } as {
    content: PostDetail[];
  };

  return (
    <div css={HomeGridLayout}>
      <PostGrid contents={postsMock.content} columnCounts={4} />
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
