import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { Color } from 'src/domains/shared/constants';
import { Button, Spacing, Text, Switch, Icon, Textarea } from 'src/domains/shared/components';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { CreatePostData } from '../PostCreate.model';
import { useBodyOverflowHidden } from 'src/domains/shared/hooks/useBodyOverflowHidden';
import { useBreakPointStore } from 'src/domains/shared/store/breakPoint';
import { BreakPoint } from 'src/domains/shared/hooks/useMediaQuery';
import { useUploadThumbnailImageMutation } from 'src/domains/shared/queries/image';

interface PostPublishInfoProps {
  onClose: () => void;
  register: UseFormRegister<CreatePostData>;
  setValue: UseFormSetValue<CreatePostData>;
  privated: 'Y' | 'N';
  thumbnailImage?: string;
  thumbnailContents?: string;
}

const PostPublishInfo = ({
  onClose,
  register,
  setValue,
  privated,
  thumbnailImage,
  thumbnailContents,
}: PostPublishInfoProps) => {
  const { isMobile } = useBreakPointStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const [isPublic, setIsPublic] = useState(privated ? privated === 'N' : true);

  const thumbnailUploadMutation = useUploadThumbnailImageMutation();

  const onFileInputClick = () => {
    inputRef.current?.click();
  };

  const onThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      thumbnailUploadMutation.mutate(file, {
        onSuccess: (url) => {
          setValue('thumbnailImg', url);
        },
      });
    }
  };

  useEffect(() => {
    setValue('privated', isPublic === true ? 'N' : 'Y');
  }, [isPublic, setValue]);

  useBodyOverflowHidden();

  return (
    <section css={postPublishContainerStyle}>
      <div css={postPublishWrapperStyle}>
        <div css={flexStyle}>
          {isMobile && (
            <div css={backIconWrapperStyle} onClick={onClose}>
              <Icon icon="Back" size={24} />
            </div>
          )}
          <Text type="title28" color="White100">
            포스트 미리보기
          </Text>
        </div>

        <Spacing col={39} />
        <div css={postPreviewContainerStyle}>
          {thumbnailImage ? (
            <div css={postThumbnailWrapperStyle}>
              <img src={thumbnailImage} alt="thumbnailImage" />
              <Spacing col={10} />
              <Button color="transparent" type="button" size="small" onClick={onFileInputClick}>
                <Text type="body14" color="Primary100">
                  수정
                </Text>
              </Button>
            </div>
          ) : (
            <Button color="Primary100" type="button" size="large" onClick={onFileInputClick}>
              썸네일 업로드
            </Button>
          )}
          <input ref={inputRef} hidden type="file" onChange={onThumbnailUpload} />
        </div>

        <Spacing col={24} />

        <Textarea
          css={postDescriptionStyle}
          placeholder="설명을 입력해주세요"
          {...register('thumbnailContents')}
          value={thumbnailContents}
          maxLength={150}
          withCount
        />
        <Spacing col={24} />
        <div css={postPreviewBottomWrapperStyle}>
          <label css={flexStyle} htmlFor="disclosure">
            <Text color="White100" type="title16">
              전체공개
            </Text>
            <Spacing row={8} />
            <Switch
              id="disclosure"
              onChange={() => {
                setIsPublic((prev) => !prev);
              }}
              checked={isPublic}
            />
          </label>

          {isMobile && <Spacing col={51} />}
          <div css={buttonWrapperStyle}>
            {!isMobile && (
              <>
                <Button color="transparent" type="button" onClick={onClose}>
                  <Text color="Primary100" type="body14">
                    취소
                  </Text>
                </Button>
                <Spacing row={12} />
              </>
            )}

            <Button color="Primary100" type="submit" fixedWidth={256}>
              <Text color="White100" type="body16">
                출판하기
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPublishInfo;

const postPublishContainerStyle = css`
  position: fixed;
  top: 64px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 64px);
  background-color: ${Color.Gray900};
  z-index: 30;
`;

const postThumbnailWrapperStyle = css`
  width: 296px;
  height: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const postPublishWrapperStyle = css`
  width: 100%;
  max-width: 605px;
  padding: 0px 32px 30px 30px;
  overflow-y: auto;
`;

const postPreviewContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 310px;
  background-color: ${Color.Gray850};
  padding-bottom: 44px;
  border-radius: 8px;
`;

const postDescriptionStyle = css`
  display: block;
  width: 100%;
  height: 310px;
  color: ${Color.White100};
  background-color: ${Color.Gray850};
  padding: 24px;
  resize: none;
  border: none;
  outline: none;
  border-radius: 8px;

  &::placeholder {
    color: ${Color.Gray600};
  }
`;

const postPreviewBottomWrapperStyle = css`
  display: flex;
  justify-content: space-between;

  ${BreakPoint.Mobile()} {
    flex-direction: column;
  }
`;

const backIconWrapperStyle = css`
  margin-top: -1px;
  cursor: pointer;
`;

const flexStyle = css`
  display: flex;
  align-items: center;
`;

const buttonWrapperStyle = css`
  ${flexStyle};

  ${BreakPoint.Mobile()} {
    justify-content: center;

    & button {
      width: 100% !important;
    }
  }
`;
