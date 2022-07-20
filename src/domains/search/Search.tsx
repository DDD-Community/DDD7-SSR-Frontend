import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { EmptyContent, PostGrid, CrewGrid, Spacing, Tabs, Text, Loading } from '../shared/components';
import { useSearchAccountsQuery, useSearchPostsQuery } from './Search.quries';

type SearchTab = 'post' | 'author';

const Search = () => {
  const { query } = useRouter();
  const [selectedTab, setSelectedTab] = useState<SearchTab>('post');
  const searchText = (query.text as string) || '';

  const tabList = useMemo(
    () => [
      {
        label: (
          <Text type="title20" css={tabSelectedStyle(selectedTab === 'post')}>
            블로그
          </Text>
        ),
        value: 'post',
      },
      {
        label: (
          <Text type="title20" css={tabSelectedStyle(selectedTab === 'author')}>
            작가
          </Text>
        ),
        value: 'author',
      },
    ],
    [selectedTab],
  );

  const handleTabChange = (value: string) => {
    setSelectedTab(value as SearchTab);
  };

  const searchPostsQuery = useSearchPostsQuery(searchText, selectedTab === 'post');
  const searchAccountQuery = useSearchAccountsQuery(searchText, selectedTab === 'author');

  const postList = useMemo(
    () => searchPostsQuery.data?.pages.flatMap((posts) => posts.content),
    [searchPostsQuery.data],
  );

  const accountList = useMemo(
    () => searchAccountQuery.data?.pages.flatMap((accounts) => accounts.content),
    [searchAccountQuery.data],
  );

  const isEmpty = useMemo(() => {
    if (selectedTab === 'post') {
      return postList?.length === 0;
    }

    return accountList?.length === 0;
  }, [selectedTab, accountList, postList]);

  const loadMorePost = () => searchPostsQuery.fetchNextPage();
  const loadMoreAccounts = () => searchAccountQuery.fetchNextPage();

  const isLoading = searchPostsQuery.isLoading || searchAccountQuery.isLoading;
  return (
    <section css={searchContainerStyle}>
      <Text type="title24" color="White100">
        검색 결과
      </Text>
      <Spacing col={6} />
      <Tabs tabList={tabList} onTabChange={handleTabChange} useUpperLine={false} tabGap={12} useInlineTab />

      <Spacing col={isEmpty ? 45 : 60} />

      {isLoading ? (
        <Loading />
      ) : (
        <div css={searchGridLayoutStyle}>
          {selectedTab === 'post' && postList && <PostGrid contents={postList} loadMore={loadMorePost} />}
          {selectedTab === 'author' && accountList && <CrewGrid contents={accountList} loadMore={loadMoreAccounts} />}
        </div>
      )}

      {isEmpty && (
        <EmptyContent
          description={'검색된 결과가 없습니다.\n 다른 키워드로 다시 검색해보세요.'}
          icon="Exclamation"
          iconColor="Primary100"
        />
      )}
    </section>
  );
};

export default Search;

const searchContainerStyle = css`
  margin-top: 81px;
`;

const tabSelectedStyle = (isSelected: boolean) => css`
  opacity: ${isSelected ? 1 : 0.5};
`;

const searchGridLayoutStyle = css`
  display: flex;
  justify-content: center;
  max-width: 1256px;
  margin-left: auto;
  margin-right: auto;
`;
