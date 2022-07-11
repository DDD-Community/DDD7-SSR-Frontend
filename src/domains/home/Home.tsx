import { css } from '@emotion/react';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { PostGrid } from '../shared/components/PostGrid';
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
      { label: 'Daily', value: 'daily' },
      { label: 'Weekly', value: 'weekly' },
      { label: 'Monthly', value: 'monthly' },
    ];
  }, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'daily') setFilteredState({ ...filteredState, period: 'daily' });
    if (event.target.value === 'weekly') setFilteredState({ ...filteredState, period: 'weekly' });
    if (event.target.value === 'monthly') setFilteredState({ ...filteredState, period: 'monthly' });
  };

  return (
    <div css={HomeGridLayout}>
      <div css={HomeSelectContainer}>
        <div css={TrendSelectContainer}>
          <div
            css={css`
              color: ${filteredState.isTrend ? Color.White100 : Color.Gray650};
              cursor: pointer;
            `}
            onClick={() => setFilteredState({ ...filteredState, isTrend: true })}
          >
            트렌드🙈
          </div>
          <div
            css={css`
              color: ${!filteredState.isTrend ? Color.White100 : Color.Gray650};
              cursor: pointer;
            `}
            onClick={() => setFilteredState({ ...filteredState, isTrend: false })}
          >
            최신
          </div>
        </div>
        {filteredState.isTrend && (
          <>
            <label htmlFor="dropdown">
              <div css={PeriodDropdown}>
                <div
                  css={css`
                    margin-right: 5px;
                  `}
                >
                  일주일
                </div>
                <div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.53837 5.74442C2.26499 5.47107 2.26495 5.02786 2.5383 4.75447C2.79343 4.49931 3.19652 4.48227 3.47141 4.70337L3.52825 4.7544L7.00056 8.22732L10.4734 4.75443C10.7286 4.49929 11.1317 4.48228 11.4065 4.7034L11.4634 4.75443C11.7185 5.00958 11.7355 5.41267 11.5144 5.68754L11.4634 5.74438L7.49612 9.71163C7.24099 9.96676 6.83792 9.98378 6.56305 9.76269L6.50621 9.71167L2.53837 5.74442Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </label>
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
  margin-bottom: 24px;
`;

const TrendSelectContainer = css`
  display: flex;
  width: 137px;
  justify-content: space-between;
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
