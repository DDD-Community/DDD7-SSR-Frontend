import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { MouseEvent, useCallback, useMemo, useState } from 'react';
import MultiFilteredSelect from '../shared/components/MultiFilteredSelect/MultiFilteredSelect';
import TextSelect from '../shared/components/TextSelect/TextSelect';
import { useBreakPointStore } from '../shared/store/breakPoint';
import { PostGrid } from '../shared/components';
import { useGetPostsQuery } from './Home.queries';

export type priodType = 'daily' | 'weekly' | 'monthly';

export type filteredType = { isTrend: boolean; period: priodType };

const Home = () => {
  const [filteredState, setFilteredState] = useState<filteredType>({ isTrend: false, period: 'weekly' });
  const { isMobile } = useBreakPointStore();
  const getPostsQuery = useGetPostsQuery(filteredState);
  const postList = useMemo(() => getPostsQuery.data?.pages.flatMap((posts) => posts.content), [getPostsQuery.data]);
  const loadMorePost = () => getPostsQuery.fetchNextPage();

  const options = useMemo(() => {
    return [
      { label: '이번 주', value: 'weekly' },
      { label: '이번 달', value: 'monthly' },
    ];
  }, []);

  const handleChange = useCallback((event: MouseEvent<HTMLElement>) => {
    {
      const targetValue = event.target as HTMLElement;
      if (targetValue.innerText === '이번 주') setFilteredState({ isTrend: true, period: 'weekly' });
      if (targetValue.innerText === '이번 달') setFilteredState({ isTrend: true, period: 'monthly' });
    }
  }, []);

  return (
    <HomeGridLayout isMobile={isMobile}>
      <div css={HomeSelectContainer}>
        <TextSelect filteredState={filteredState} setFilteredState={setFilteredState} />
        {filteredState.isTrend && (
          <MultiFilteredSelect value={filteredState.period} onChangeSelectValue={handleChange} options={options} />
        )}
      </div>
      {postList && <PostGrid contents={postList} loadMore={loadMorePost} />}
    </HomeGridLayout>
  );
};

export default Home;

const HomeGridLayout = styled.div<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1256px;
  margin-top: 131px;
  margin-top: ${(props) => (props.isMobile ? '35px' : '131px')};
  margin-left: auto;
  margin-right: auto;
`;

const HomeSelectContainer = css`
  width: 100%;
  height: 32px;
  color: white;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;
