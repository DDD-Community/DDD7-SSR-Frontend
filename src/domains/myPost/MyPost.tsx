import { css } from '@emotion/react';
import React, { useCallback, useMemo, useState } from 'react';
import { Spacing, Tabs, Text, PostGrid } from 'src/domains/shared/components';
import LabelWithCount from './components/LabelWithCount';
import { MyPostDisplay } from './MyPost.model';
import { useMyPostListQuery } from './MyPost.quries';

const MyPost = () => {
  const [selectedTab, setSelectedTab] = useState<MyPostDisplay>('public');
  const publicMyPostListQuery = useMyPostListQuery('public');
  const privateMyPostListQuery = useMyPostListQuery('private');

  const publicPostList = useMemo(
    () => publicMyPostListQuery.data?.pages.flatMap((posts) => posts.content),
    [publicMyPostListQuery.data],
  );

  const privatePostList = useMemo(
    () => privateMyPostListQuery.data?.pages.flatMap((posts) => posts.content),
    [privateMyPostListQuery.data],
  );

  const publicBoardCount = publicMyPostListQuery.data?.pages[0].totalElements || 0;
  const privateBoardCount = privateMyPostListQuery.data?.pages[0].totalElements || 0;

  const contents = useMemo(
    () => (selectedTab === 'public' ? publicPostList : privatePostList),
    [selectedTab, publicPostList, privatePostList],
  );

  const loadMore = useCallback(() => {
    if (selectedTab === 'public') {
      return publicMyPostListQuery.fetchNextPage();
    }

    return privateMyPostListQuery.fetchNextPage();
  }, [selectedTab, publicMyPostListQuery, privateMyPostListQuery]);

  const tabList = useMemo(
    () => [
      {
        label: <LabelWithCount label="출간됨" count={publicBoardCount} isSelected={selectedTab === 'public'} />,
        value: 'public',
      },
      // {
      //   label: <LabelWithCount label="임시저장" count={3} isSelected={selectedTab === 'stored'} />,
      //   value: 'stored',
      // },
      {
        label: <LabelWithCount label="비공개" count={privateBoardCount} isSelected={selectedTab === 'private'} />,
        value: 'private',
      },
    ],
    [publicBoardCount, privateBoardCount, selectedTab],
  );

  const handleTabChange = (value: string) => {
    setSelectedTab(value as MyPostDisplay);
  };

  return (
    <section css={myPostContainerStyle}>
      <Text type="title24" color="White100">
        내가 쓴 글 보기
      </Text>
      <Spacing col={54} />

      <Tabs tabList={tabList} onTabChange={handleTabChange} />
      <Spacing col={(contents?.length || 0) > 0 ? 35 : 55} />
      <div>{contents && <PostGrid contents={contents} loadMore={loadMore} />}</div>
    </section>
  );
};

export default MyPost;

const myPostContainerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 928px;
  margin: 82px auto 0;
`;
