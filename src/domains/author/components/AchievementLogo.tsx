import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

interface AchievementLogo {
  logo: string;
  description: string;
}

export const AchievementLogo = ({ logo, description }: AchievementLogo) => {
  return (
    <div css={achievementWrapperStyle}>
      <Image title={description} src={logo} alt={description} width="50px" height="50px" />
    </div>
  );
};

const achievementWrapperStyle = css`
  width: 50px;
  height: 50px;
`;
