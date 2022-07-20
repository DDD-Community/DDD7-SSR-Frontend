import { css } from '@emotion/react';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Color, DEFAULT_PROFILE_IMAGE } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { useUploadProfileImageMutation } from '../../queries/image';
import { Text } from '../Text';
import { ProfileImageProps } from './ProfileImageType';

const ProfileImage = forwardRef<HTMLInputElement, ProfileImageProps>(
  ({ src, onChange, updatable, width = 113 }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const uploadProfileImageMutation = useUploadProfileImageMutation();

    const handleClick = () => {
      if (!inputRef.current) {
        return;
      }

      inputRef.current?.click();
    };

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        uploadProfileImageMutation.mutate(file, {
          onSuccess: (url) => {
            onChange?.(url);
          },
        });
      }
    };

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
      <div
        css={css`
          ${profileImageStyle(width)}
          ${updatable && cursorPointerStyle}
        `}
        onClick={handleClick}
      >
        {updatable && <input ref={inputRef} type="file" onChange={handleChange} hidden />}
        <img src={src || DEFAULT_PROFILE_IMAGE} alt="profile-image" />
      </div>
    );
  },
);

export default ProfileImage;
ProfileImage.displayName = 'ProfileImage';

const profileImageStyle = (width: number) => css`
  position: relative;
  max-width: ${width}px;
  width: ${width}px;
  max-height: ${width}px;
  height: ${width}px;
  flex: 1 0 auto;

  & img {
    width: 100%;
    height: 100%;
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
