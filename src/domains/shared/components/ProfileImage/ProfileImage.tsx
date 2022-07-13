import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { Color, DEFAULT_PROFILE_IMAGE } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { useUploadProfileImageMutation } from '../../queries/image';
import { ProfileImageProps } from './ProfileImageType';

const ProfileImage = ({ src, onChange, updatable, width = 113 }: ProfileImageProps) => {
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

  useEffect(() => {
    setProfileImg(src);
  }, [src]);

  return (
    <div
      css={css`
        ${profileImageStyle(width)}
        ${updatable && cursorPointerStyle}
      `}
      onClick={handleClick}
    >
      {updatable && <input ref={ref} type="file" onChange={handleChange} hidden />}
      <img src={profileImg || DEFAULT_PROFILE_IMAGE} alt="profile-image" />
    </div>
  );
};

export default ProfileImage;

const profileImageStyle = (width: number) => css`
  max-width: ${width}px;
  width: ${width}px;
  max-height: ${width}px;
  flex: 1 0 auto;

  & img {
    width: 100%;
    border-radius: 50%;
    background-color: ${Color.Gray800};
  }

  ${BreakPoint.Mobile()} {
    flex: 1 0 auto;
    max-width: ${width - 5} px;
    max-height: ${width - 5}px;
  }
`;

const cursorPointerStyle = css`
  cursor: pointer;
`;
