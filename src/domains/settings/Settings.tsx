import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, Spacing, TextInput, Button, ProfileImage, Switch } from '../shared/components';
import { Textarea } from '../shared/components/Textarea';
import { Color } from '../shared/constants';
import ProfileInfoRow from './components/ProfileInfoRow';
import { UserProfileInfo } from './Setting.model';

const Settings = () => {
  const { register, control, watch } = useForm<UserProfileInfo>();
  const blogDescription = watch('blogDescription');

  return (
    <section css={settingsContainerStyle}>
      <Text type="title24" color="White100">
        프로필 설정
      </Text>
      <Spacing col={35} />
      <section css={userInfoContainerStyle}>
        <div css={UserProfileInfoStyle}>
          <ProfileImage src={undefined} />
          <Spacing row={35} />
          <div css={UserProfileInfoInputWrapperStyle}>
            <TextInput placeholder="블로그명을 입력해주세요." {...register('blogName')} />
            <Spacing col={10} />
            <Textarea
              placeholder="소개글을 입력해주세요."
              {...register('blogDescription')}
              value={blogDescription}
              maxLength={150}
              withCount
            />
            <Spacing col={7} />

            <Button color="Primary100" size="medium" type="submit">
              저장하기
            </Button>
          </div>
        </div>

        <Spacing col={69} />

        <div>
          <ProfileInfoRow labelText="아이디">
            <span>ansrjsdn</span>
          </ProfileInfoRow>
        </div>
        <div>
          <ProfileInfoRow labelText="소셜 계정 연동">
            <div css={flexBoxStyle}>
              <img src="/googleIcon.png" alt="login-icon" width={27} />
              <Spacing row={7} />
              <Text type="tag12">ansejrrhkd@naver.com</Text>
            </div>
          </ProfileInfoRow>
        </div>
        <div>
          <ProfileInfoRow labelText="이메일 수신 설정">
            <div css={flexBoxStyle}>
              <Text type="tag12">듀스페이퍼의 업데이트 소식을 수신합니다.</Text>
              <Spacing row={15} />
              <Controller
                control={control}
                name="isAllowEmail"
                render={({ field }) => {
                  return <Switch checked={field.value || false} onChange={() => field.onChange(!field.value)} />;
                }}
              />
            </div>
          </ProfileInfoRow>
        </div>
        <div>
          <ProfileInfoRow labelText="회원 탈퇴">
            <div>
              <Button color="Red100" fixedWidth={119}>
                회원 탈퇴하기
              </Button>
              <Spacing col={15} />
              <div>탈퇴 시, 작성하신 글 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
            </div>
          </ProfileInfoRow>
        </div>
      </section>
    </section>
  );
};

export default Settings;

const settingsContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  margin: 0 auto;
  max-width: 701px;
  min-width: 568px;
`;

const userInfoContainerStyle = css`
  width: 100%;
  background-color: ${Color.Gray850};
  border-radius: 16px;
  padding: 41px 56px 92px 27px;
`;

const UserProfileInfoStyle = css`
  display: flex;
  margin-left: 15px;
`;

const UserProfileInfoInputWrapperStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  & textarea {
    width: 100%;
    resize: none;
    background-color: ${Color.Gray800};
  }

  & button {
    margin-left: auto;
  }
`;

const flexBoxStyle = css`
  display: flex;
  align-items: center;
`;
