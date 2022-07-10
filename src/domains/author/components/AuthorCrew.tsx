import { css } from '@emotion/react';
import React from 'react';
import { EmptyContent } from 'src/domains/shared/components';
import { useGetCrewListQuery } from 'src/domains/shared/queries/crews';
import { CrewItem } from './CrewItem';

interface AuthorCrewProps {
  accountIdx: number;
}

export const AuthorCrew = ({ accountIdx }: AuthorCrewProps) => {
  const getCrewsListQuery = useGetCrewListQuery(accountIdx);
  const crewList = getCrewsListQuery.data;

  return (
    <div>
      {crewList && crewList.length > 0 ? (
        <ul css={crewGridStyle}>
          {crewList.map((crew) => (
            <CrewItem
              id={crew.accountIdx}
              profileImg={crew.profileImg || undefined}
              blogName={crew.name}
              blogDescription={crew.introduction}
            />
          ))}
        </ul>
      ) : (
        <EmptyContent icon="Exclamation" iconColor="Primary100" description="추가된 크루가 없습니다." />
      )}
    </div>
  );
};

const crewGridStyle = css`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 296px);
  gap: 21px;
`;
