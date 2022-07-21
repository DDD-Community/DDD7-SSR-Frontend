import styled from '@emotion/styled';
import React from 'react';
import { Spacing, Text } from 'src/domains/shared/components';
import { AchieveGrid } from 'src/domains/shared/components/Grid/AchieveGrid';
import {
  COMMENT_ACHIEVEMENT,
  CREW_ACHIEVEMENT,
  getAchievementGrades,
  POST_ACHIEVEMENT,
} from 'src/domains/shared/constants/achievement';
import { AchievementLogo } from './AchievementLogo';

interface AuthorIntroProps {
  introduction: string;
  postCount: number;
  crewCount: number;
  commentCount: number;
}

export const AuthorIntro = ({ introduction, crewCount, postCount, commentCount }: AuthorIntroProps) => {
  const achieveList = [
    { count: postCount, logoMap: POST_ACHIEVEMENT },
    { count: commentCount, logoMap: COMMENT_ACHIEVEMENT },
    { count: crewCount, logoMap: CREW_ACHIEVEMENT },
  ];

  return (
    <>
      <Spacing col={45} />

      <div>
        <div>
          <Text type="body16" color="White100">
            소개
          </Text>
          <Spacing col={24} />
          <PreWrapText type="tag12" color="White100">
            {introduction}
          </PreWrapText>
        </div>
        <Spacing col={42} />
        <div>
          <Text type="body16" color="White100">
            업적
          </Text>
          <Spacing col={23} />
          <AchieveGrid>
            {achieveList.map(({ count, logoMap }) => {
              return getAchievementGrades(count).map((grade) => {
                const gradeInfo = logoMap[grade];
                return <AchievementLogo key={grade} logo={gradeInfo.logo} description={gradeInfo.description} />;
              });
            })}
          </AchieveGrid>
        </div>
      </div>
    </>
  );
};

const PreWrapText = styled(Text)`
  white-space: pre-wrap;
`;
