import styled from '@emotion/styled';
import Image from 'next/image';
import { memo } from 'react';
import { Color } from 'src/domains/shared/constants';
import { UserProfileImgProps } from './UserProfileNameCardType';

const UserProfileNameCard = ({ img, userName }: UserProfileImgProps) => {
  return (
    <UserProfileContainer>
      <UserProfileImgCircle>
        {img ? (
          <Image src={img} alt="*" width={100} height={100} />
        ) : (
          <div>
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="56" cy="56" r="56" fill="#34353A" />
              <path
                d="M31.717 85.2389C31.717 85.2389 26.7612 85.2389 26.7612 80.2832C26.7612 75.3274 31.717 60.4602 56.4957 60.4602C81.2745 60.4602 86.2303 75.3274 86.2303 80.2832C86.2303 85.2389 81.2745 85.2389 81.2745 85.2389H31.717ZM56.4957 55.5044C60.4388 55.5044 64.2203 53.938 67.0085 51.1499C69.7966 48.3617 71.363 44.5802 71.363 40.6372C71.363 36.6941 69.7966 32.9126 67.0085 30.1244C64.2203 27.3363 60.4388 25.7699 56.4957 25.7699C52.5527 25.7699 48.7712 27.3363 45.983 30.1244C43.1949 32.9126 41.6285 36.6941 41.6285 40.6372C41.6285 44.5802 43.1949 48.3617 45.983 51.1499C48.7712 53.938 52.5527 55.5044 56.4957 55.5044Z"
                fill="#7F7F83"
              />
            </svg>
          </div>
        )}
      </UserProfileImgCircle>
      <UserProfileName>{userName}</UserProfileName>
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98px;
  height: 32px;
`;

const UserProfileImgCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  overflow: hidden;
  background-color: 'yellow';
`;

const UserProfileName = styled.div`
  color: ${Color.White100};
  font-size: 12px;
  font-weight: bold;
`;

export default memo(UserProfileNameCard);
