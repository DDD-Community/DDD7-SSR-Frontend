import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Text, Spacing, ProfileImage } from 'src/domains/shared/components';
import { Color } from 'src/domains/shared/constants';

interface CrewItemProps {
  id: number;
  profileImg?: string;
  blogName: string;
  blogDescription: string;
}

export const CrewItem = ({ id, profileImg, blogName, blogDescription }: CrewItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/author/${id}`);
  };

  return (
    <li css={crewItemContainerStyle} onClick={handleClick}>
      <ProfileImage src={profileImg} updatable={false} width={80} />
      <Spacing col={16} />
      <Text type="body18" color="White100">
        {blogName}
      </Text>
      <Spacing col={16} />
      <Text type="tag12" color="Gray600">
        {blogDescription}
      </Text>
    </li>
  );
};

const crewItemContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  width: 296px;
  height: 240px;
  background-color: ${Color.Gray850};
  border-radius: 16px;
`;
