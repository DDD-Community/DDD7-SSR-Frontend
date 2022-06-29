import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, Spacing, TextInput, Button, ProfileImage, Switch } from '../shared/components';
import { Textarea } from '../shared/components/Textarea';
import { Color } from '../shared/constants';
import { BreakPoint } from '../shared/hooks/useMediaQuery';
import { useBreakPointStore } from '../shared/store/breakPoint';
import ProfileInfoRow from './components/ProfileInfoRow';
import { UserProfileInfo } from './Setting.model';

const Settings = () => {
  const { isMobile } = useBreakPointStore();
  const { register, control, watch } = useForm<UserProfileInfo>();
  const blogDescription = watch('blogDescription');

  return (
    <section css={settingsContainerStyle}>
      <Text type="title24" color="White100">
        프로필 설정
      </Text>
      <Spacing col={35} />
      <section css={userInfoContainerStyle}>
        <div css={userProfileBaseInfoStyle}>
          <div css={userProfileImageWrapperStyle}>
            <ProfileImage src={undefined} />
            {isMobile && (
              <div>
                <Button type="button" color="Primary100" size="large">
                  이미지 업로드
                </Button>
                <Spacing col={12} />
                <Button type="button" color="Gray300" size="large">
                  이미지 제거
                </Button>
              </div>
            )}
          </div>
          <Spacing row={isMobile ? 0 : 29} col={isMobile ? 27 : 0} />
          <div css={userProfileInfoInputWrapperStyle}>
            <TextInput placeholder="블로그명을 입력해주세요." {...register('blogName')} />
            <Spacing col={10} />
            <Textarea
              placeholder="소개글을 입력해주세요."
              {...register('blogDescription')}
              value={blogDescription}
              maxLength={140}
              withCount
            />
            <Spacing col={isMobile ? 16 : 7} />

            <Button color="Primary100" size="medium" type="submit">
              저장하기
            </Button>
          </div>
        </div>

        <Spacing col={69} />

        <section css={userProfileDetailWrapperStyle}>
          <ProfileInfoRow labelText="아이디">
            <span>ansrjsdn</span>
          </ProfileInfoRow>
          <ProfileInfoRow labelText="소셜 계정 연동">
            <div css={flexBoxStyle}>
              <img src="/googleIcon.png" alt="login-icon" width={27} />
              <Spacing row={7} />
              <Text type="tag12">ansejrrhkd@naver.com</Text>
            </div>
          </ProfileInfoRow>

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

          <ProfileInfoRow labelText="회원 탈퇴">
            <div>
              <Button color="Red100" fixedWidth={119}>
                회원 탈퇴하기
              </Button>
              <Spacing col={15} />
              <div>탈퇴 시, 작성하신 글 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
            </div>
          </ProfileInfoRow>
        </section>
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

  ${BreakPoint.Mobile()} {
    min-width: 300px;
  }
`;

const userInfoContainerStyle = css`
  width: 100%;
  background-color: ${Color.Gray850};
  border-radius: 16px;
  padding: 41px 56px 92px 27px;

  ${BreakPoint.Mobile()} {
    background-color: transparent;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const userProfileBaseInfoStyle = css`
  display: flex;
  margin-left: 15px;

  ${BreakPoint.Mobile()} {
    flex-direction: column;
  }
`;

const userProfileImageWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  flex: 1 0 auto;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const userProfileInfoInputWrapperStyle = css`
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

const userProfileDetailWrapperStyle = css`
  ${BreakPoint.Mobile()} {
    background-color: ${Color.Gray850};
    padding: 2px 26px 20px 27px;
    border-radius: 12px;
  }
`;

const flexBoxStyle = css`
  display: flex;
  align-items: center;
`;
