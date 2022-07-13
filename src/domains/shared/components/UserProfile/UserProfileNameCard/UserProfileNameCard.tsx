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
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#34353A" />
              <path
                d="M11.3275 30.4424C11.3275 30.4424 9.55762 30.4424 9.55762 28.6725C9.55762 26.9026 11.3275 21.5929 20.1771 21.5929C29.0266 21.5929 30.7966 26.9026 30.7966 28.6725C30.7966 30.4424 29.0266 30.4424 29.0266 30.4424H11.3275ZM20.1771 19.823C21.5853 19.823 22.9359 19.2635 23.9316 18.2678C24.9274 17.272 25.4868 15.9215 25.4868 14.5132C25.4868 13.105 24.9274 11.7544 23.9316 10.7587C22.9359 9.76291 21.5853 9.20349 20.1771 9.20349C18.7689 9.20349 17.4183 9.76291 16.4225 10.7587C15.4268 11.7544 14.8674 13.105 14.8674 14.5132C14.8674 15.9215 15.4268 17.272 16.4225 18.2678C17.4183 19.2635 18.7689 19.823 20.1771 19.823Z"
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
  justify-content: space-around;
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
