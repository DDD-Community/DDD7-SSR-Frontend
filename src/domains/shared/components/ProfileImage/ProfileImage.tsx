import { css } from '@emotion/react';
import React, { useRef } from 'react';
import { Color } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { ProfileImageProps } from './ProfileImageType';

const ProfileImage = ({ src, onChange }: ProfileImageProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const file = files[0];
      // 업로드
      onChange?.(file);
    }
  };

  return (
    <div css={profileImageStyle} onClick={handleClick}>
      <input ref={ref} type="file" onChange={handleChange} hidden />
      <img src={src ?? '/defaultProfileImage.png'} alt="profile-image" />
    </div>
  );
};

export default ProfileImage;

const profileImageStyle = css`
  max-width: 113px;
  max-height: 113px;
  flex: 1 0 auto;
  cursor: pointer;

  & img {
    width: 100%;
    border-radius: 50%;
    background-color: ${Color.Gray800};
  }

  ${BreakPoint.Mobile()} {
    flex: 1 0 auto;
    max-width: 108px;
    max-height: 108px;
  }
`;
