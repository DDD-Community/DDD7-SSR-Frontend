import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Writer from 'src/domains/shared/components/Editor/Writer';
import { Color } from 'src/domains/shared/constants';
import { useIsShown } from 'src/domains/shared/hooks/useIsShown';
import TextareaAutosize from 'react-textarea-autosize';
import PostPublishInfo from './components/PostPublishInfo';
import { Button, MultipleSelect, Spacing, Switch, Text } from 'src/domains/shared/components';
import { CreatePostData } from './PostCreate.model';
import { usePostCreateMutation } from './PostCreate.queries';
import Router from 'next/router';
import { ValueOption } from 'src/domains/shared/components/MultipleSelect/MultipleSelectTypes';
import Image from 'next/image';
import { useBreakPointStore } from 'src/domains/shared/store/breakPoint';
import { EditorMode } from 'src/domains/shared/components/Editor/EditorType';
import { useGetFriendsListQuery } from 'src/domains/shared/queries/friends';

const PostCreate = () => {
  const postCreateMutation = usePostCreateMutation();
  const friendListQuery = useGetFriendsListQuery('8');

  const { isMobile } = useBreakPointStore();
  const [editorMode, setEditorMode] = useState<EditorMode>('markdown');

  const { register, handleSubmit, control } = useForm<CreatePostData>();
  const onSubmit = handleSubmit((data) => {
    postCreateMutation.mutate(data, {
      onSuccess: (result) => {
        Router.push(`/posts/${result.postIdx}`);
      },
    });
  });

  const [isModalShown, handleModalOpen, handleModalClose] = useIsShown(false);
  const [isPreviewPlaceholderShown, handlePreviewPlaceholderAppear, handlePreviewPlaceholderDisappear] =
    useIsShown(true);
  const [selectedFriendsList, setSelectedFriendsList] = useState<ValueOption[]>([]);
  const [isHaveFriendsChecked, setIsHaveFriendsChecked] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setEditorMode('wysiwyg');
      return;
    }

    setEditorMode('markdown');
  }, [isMobile]);

  return (
    <section css={createSectionStyle}>
      <form css={postFormContainer} onSubmit={onSubmit}>
        <section css={titleWrapperStyle}>
          <TextareaAutosize maxRows={3} placeholder="제목을 입력해주세요." {...register('title')} maxLength={150} />
          <Button type="button" color="Primary100" size="medium" onClick={handleModalOpen}>
            <Text color="White100" type="body14">
              출판하기
            </Text>
          </Button>
        </section>

        <Controller
          control={control}
          name="contents"
          render={({ field }) => {
            return (
              <Writer
                height="600px"
                initialValue=""
                onChange={(value) => {
                  field.onChange(value);
                  if (value.length === 0) {
                    handlePreviewPlaceholderAppear();
                    return;
                  }

                  handlePreviewPlaceholderDisappear();
                }}
                editorMode={editorMode}
                onChangeMode={(mode) => {
                  setEditorMode(mode);
                }}
                hideModeSwitch={isMobile}
              />
            );
          }}
        />
        <section css={editorContainerStyle}>
          {!isPreviewPlaceholderShown && (
            <div css={previewTopTextStyle}>
              <Text type="tag12" color="Primary50">
                출판예상화면
              </Text>
            </div>
          )}
          {!isMobile && isPreviewPlaceholderShown && (
            <div css={previewPlaceholderStyle}>
              <Text type="tag12" color="Gray650">
                출판예상화면
              </Text>
              <Spacing col={4} />
              <Image src="/dewspaper_gray_logo.png" alt="dewspaper-logo" width={110} height={24} />
            </div>
          )}
        </section>

        <Spacing col={34} />

        <div css={flexBoxStyle}>
          <Text type="title16" color="White100">
            함께한 사용자가 있나요?
          </Text>
          <Spacing row={5} />
          <Switch checked={isHaveFriendsChecked} onChange={() => setIsHaveFriendsChecked((prev) => !prev)} />
        </div>
        <Spacing col={10} />

        <MultipleSelect
          placeholder="친구를 찾아주세요."
          options={friendListQuery.data?.map((value) => ({
            // key: value.id,
            label: value.email,
            value: value.email,
            leftComponent: (
              <Image src={value.profileImg || '/dewspaper_logo-02.svg'} alt="profile" width="20px" height="20px" />
            ),
          }))}
          onChange={(values) => setSelectedFriendsList(values)}
          value={selectedFriendsList}
          disabled={!isHaveFriendsChecked}
          emptyListMessage="검색된 친구가 없습니다."
        />
        {isModalShown && <PostPublishInfo onClose={handleModalClose} register={register} />}
      </form>
    </section>
  );
};

export default PostCreate;

const createSectionStyle = css`
  margin: 83px 0px;
  overflow-y: auto;
`;

const postFormContainer = css`
  padding-bottom: 200px;
`;

const flexBoxStyle = css`
  display: flex;
`;

const previewTopTextStyle = css`
  position: absolute;
  top: -604px;
  left: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const editorContainerStyle = css`
  position: relative;
  display: flex;
  margin-left: auto;
  width: 50%;
`;

const previewPlaceholderStyle = css`
  position: absolute;
  top: -350px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const titleWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  & textarea {
    font-weight: bold;
    display: inline-flex;
    width: 80%;
    max-width: 1015px;
    font-size: 28px;
    color: ${Color.White100};
    caret-color: ${Color.White100};
    border: none;
    background-color: transparent;
    outline: none;
    resize: none;
  }
`;

const FRIENDS_LIST = [
  {
    id: 0,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'test@naver.com',
  },
  {
    id: 1,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'test1@naver.com',
  },
  {
    id: 2,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'aaa@naver.com',
  },
  {
    id: 3,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'high2@naver.com',
  },
];
