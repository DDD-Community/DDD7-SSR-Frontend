import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import { Color } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { useUploadProfileImageMutation } from '../../queries/image';
import { ProfileImageProps } from './ProfileImageType';

const ProfileImage = ({ src, onChange }: ProfileImageProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [profileImg, setProfileImg] = useState(src);
  const uploadProfileImageMutation = useUploadProfileImageMutation();

  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      uploadProfileImageMutation.mutate(file, {
        onSuccess: (url) => {
          console.log(url);
          setProfileImg(url);
          onChange?.(url);
        },
      });
    }
  };

  return (
    <div css={profileImageStyle} onClick={handleClick}>
      <input ref={ref} type="file" onChange={handleChange} hidden />
      <img src={profileImg ?? '/defaultProfileImage.png'} alt="profile-image" />
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
