import { css } from '@emotion/react';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { PostGrid } from '../shared/components/PostGrid';
import TextSelect from '../shared/components/TextSelect/TextSelect';
import { Color, FontSize } from '../shared/constants';
import { useGetPostsQuery } from './Home.queries';

export type priodType = 'daily' | 'weekly' | 'monthly';

export type filteredType = { isTrend: boolean; period: priodType };

const Home = () => {
  const [filteredState, setFilteredState] = useState<filteredType>({ isTrend: false, period: 'weekly' });

  const getPostsQuery = useGetPostsQuery(filteredState);
  const postList = useMemo(() => getPostsQuery.data?.pages.flatMap((posts) => posts.content), [getPostsQuery.data]);
  const loadMorePost = () => getPostsQuery.fetchNextPage();

  const options = useMemo(() => {
    return [
      { label: '이번 주', value: 'weekly' },
      { label: '이번 달', value: 'monthly' },
    ];
  }, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    if (event.target.value === 'weekly') setFilteredState({ ...filteredState, period: 'weekly' });
    if (event.target.value === 'monthly') setFilteredState({ ...filteredState, period: 'monthly' });
  };

  return (
    <div css={HomeGridLayout}>
      <div css={HomeSelectContainer}>
        <TextSelect filteredState={filteredState} setFilteredState={setFilteredState} />
        <div css={DropdownContainer}>
          {filteredState.isTrend && (
            <>
              <select id="dropdown" css={PeriodDropdown} value={filteredState.period} onChange={handleChange}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
      {postList && <PostGrid contents={postList} loadMore={loadMorePost} />}
    </div>
  );
};

export default Home;

const HomeGridLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1256px;
  margin-top: 131px;
  margin-left: auto;
  margin-right: auto;
`;

const HomeSelectContainer = css`
  width: 100%;
  color: white;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const DropdownContainer = css`
  margin-bottom: 22px;
`;

const PeriodDropdown = css`
  width: 70px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.Gray800};
  color: ${Color.Gray600};
  font-size: ${FontSize.small};
`;
