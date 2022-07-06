import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import { Color, DEFAULT_PROFILE_IMAGE } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { useUploadProfileImageMutation } from '../../queries/image';
import { ProfileImageProps } from './ProfileImageType';

const ProfileImage = ({ src, onChange, updatable }: ProfileImageProps) => {
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
          setProfileImg(url);
          onChange?.(url);
        },
      });
    }
  };

  return (
    <div
      css={css`
        ${profileImageStyle}
        ${updatable && cursorPointerStyle}
      `}
      onClick={handleClick}
    >
      {updatable && <input ref={ref} type="file" onChange={handleChange} hidden />}
      <img src={profileImg ?? DEFAULT_PROFILE_IMAGE} alt="profile-image" />
    </div>
  );
};

export default ProfileImage;

const profileImageStyle = css`
  max-width: 113px;
  max-height: 113px;
  flex: 1 0 auto;

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

const cursorPointerStyle = css`
  cursor: pointer;
`;
