import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { Text, Spacing, TextInput, Button, ProfileImage, Switch } from '../shared/components';
import { Confirm } from '../shared/components/Confirm';
import { Textarea } from '../shared/components/Textarea';
import { Color } from '../shared/constants';
import { useIsShown } from '../shared/hooks/useIsShown';
import { BreakPoint } from '../shared/hooks/useMediaQuery';
import useUser from '../shared/hooks/useUser';
import { useAccountDetailQuery } from '../shared/queries/account';
import { useBreakPointStore } from '../shared/store/breakPoint';
import ProfileInfoRow from './components/ProfileInfoRow';
import { AccountProfile, AlarmRequest } from './Setting.model';
import { useSaveAccountInfoMutation, useToggleAlarmMutation, useWithdrawAccountMutation } from './Setting.queries';

const Settings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { isMobile } = useBreakPointStore();

  const user = useUser();

  const accountDetailQuery = useAccountDetailQuery(user?.accountIdx);
  const saveAccountInfoMutation = useSaveAccountInfoMutation();
  const withdrawalMutation = useWithdrawAccountMutation();
  const toggleAlarmMutation = useToggleAlarmMutation();

  const [isShownWithdrawalConfirm, handleOpenWithdrawalConfirm, handleCloseWithDrawalConfirm] = useIsShown(false);

  const { register, watch, reset, handleSubmit } = useForm<AccountProfile>();
  const name = watch('name');
  const blogName = watch('blogName');
  const profileImg = watch('profileImg');
  const introduction = watch('introduction');

  const platformUrl = useMemo(() => {
    const platform = accountDetailQuery.data?.platform;

    if (platform === 'google') {
      return '/googleIcon.png';
    }

    if (platform === 'kakao') {
      return '/kakaoIcon.png';
    }

    return '/naverIcon.png';
  }, [accountDetailQuery.data?.platform]);

  const disableSaveButton = useMemo(() => {
    if (!name || !blogName) {
      return true;
    }
    return false;
  }, [name, blogName]);

  const handleSaveAccount = handleSubmit((data) => {
    saveAccountInfoMutation.mutate(data, {
      onSuccess: (result) => {
        toast.success('프로필이 저장되었습니다.');
        queryClient.setQueryData(['AccountDetail', user?.accountIdx], result);
      },
    });
  });

  const handleWithdrawalAccount = () => {
    withdrawalMutation.mutate(undefined, {
      onSettled: () => {
        handleCloseWithDrawalConfirm();
      },
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  const handleToggleAlarm = () => {
    if (accountDetailQuery.data) {
      toggleAlarmMutation.mutate(
        {
          alarmAgree: accountDetailQuery.data.alarmAgree === 'Y' ? 'N' : 'Y',
          emailAgree: accountDetailQuery.data.emailAgree,
        },
        {
          onSuccess: (result) => {
            queryClient.setQueryData(['AccountDetail', user?.accountIdx], result);
          },
        },
      );
    }
  };

  const handleToggleEmailAlarm = () => {
    if (accountDetailQuery.data) {
      toggleAlarmMutation.mutate(
        {
          alarmAgree: accountDetailQuery.data.alarmAgree,
          emailAgree: accountDetailQuery.data.emailAgree === 'Y' ? 'N' : 'Y',
        },
        {
          onSuccess: (result) => {
            queryClient.setQueryData(['AccountDetail', user?.accountIdx], result);
          },
        },
      );
    }
  };

  useEffect(() => {
    reset({
      name: accountDetailQuery.data?.name || '',
      blogName: accountDetailQuery.data?.blogName || '',
      introduction: accountDetailQuery.data?.introduction || '',
      profileImg: accountDetailQuery.data?.profileImg || '',
    });
  }, [accountDetailQuery.data, reset]);

  return (
    <>
      <section css={settingsContainerStyle}>
        <Text type="title24" color="White100">
          프로필 설정
        </Text>
        <Spacing col={35} />
        <section css={userInfoContainerStyle}>
          <form onSubmit={handleSaveAccount}>
            <div css={userProfileBaseInfoStyle}>
              <div css={userProfileImageWrapperStyle}>
                <ProfileImage src={profileImg || undefined} updatable />
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
                <div css={userProfileInputWrapperStyle}>
                  <TextInput css={userNameInputStyle} placeholder="닉네임을 입력해주세요." {...register('name')} />
                  <Spacing row={isMobile ? 0 : 8} col={isMobile ? 12 : 0} />
                  <TextInput
                    css={userBlogNameInputStyle}
                    placeholder="블로그명을 입력해주세요."
                    {...register('blogName')}
                  />
                </div>

                <Spacing col={10} />
                <Textarea
                  placeholder="소개글을 입력해주세요."
                  {...register('introduction')}
                  value={introduction}
                  maxLength={140}
                  withCount
                />
                <Spacing col={isMobile ? 16 : 7} />

                <Button
                  color={disableSaveButton ? 'Gray300' : 'Primary100'}
                  size="medium"
                  type="submit"
                  disabled={disableSaveButton}
                >
                  <Text type="body14">저장하기</Text>
                </Button>
              </div>
            </div>
          </form>

          <Spacing col={69} />

          <section css={userProfileDetailWrapperStyle}>
            <ProfileInfoRow labelText="아이디">
              <span>{accountDetailQuery.data?.profileId}</span>
            </ProfileInfoRow>
            <ProfileInfoRow labelText="소셜 계정 연동">
              <div css={flexBoxStyle}>
                <Image src={platformUrl} alt={`${accountDetailQuery.data?.platform}-icon`} width={27} height={27} />
                <Spacing row={7} />
                <Text type="tag12">{accountDetailQuery.data?.email}</Text>
              </div>
            </ProfileInfoRow>

            <ProfileInfoRow labelText="이메일 수신 설정">
              <div css={alarmWrapperStyle}>
                <div css={flexBoxStyle}>
                  <Text type="tag12">배포한 글과 작성한 댓글에 대한 알림을 수신합니다.</Text>
                  <Spacing row={12} />
                  <Switch checked={accountDetailQuery.data?.alarmAgree === 'Y' || false} onChange={handleToggleAlarm} />
                </div>
                <Spacing col={16} />
                <div css={flexBoxStyle}>
                  <Text type="tag12">듀스페이퍼의 업데이트 소식을 수신합니다..</Text>
                  <Spacing row={12} />
                  <Switch
                    checked={accountDetailQuery.data?.emailAgree === 'Y' || false}
                    onChange={handleToggleEmailAlarm}
                  />
                </div>
              </div>
            </ProfileInfoRow>

            <ProfileInfoRow labelText="회원 탈퇴">
              <div>
                <Button type="button" color="Red100" fixedWidth={119} onClick={handleOpenWithdrawalConfirm}>
                  회원 탈퇴하기
                </Button>
                <Spacing col={15} />
                <div>탈퇴 시, 작성하신 글 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
              </div>
            </ProfileInfoRow>
          </section>
        </section>
      </section>

      <Confirm
        isShown={isShownWithdrawalConfirm}
        onClose={handleCloseWithDrawalConfirm}
        description="정말 탈퇴하시나요?"
        buttonText="탈퇴하기"
        buttonTextColor="Red100"
        onConfirm={handleWithdrawalAccount}
      />
    </>
  );
};

export default Settings;

const settingsContainerStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  margin: 50px auto 0px;
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
    height: 119px;
    resize: none;
    background-color: ${Color.Gray800};
  }

  & textarea,
  input {
    font-size: 12px;
    line-height: 15px;
  }

  & button {
    margin-left: auto;
  }
`;

const userProfileInputWrapperStyle = css`
  display: flex;

  ${BreakPoint.Mobile()} {
    width: 100%;
    flex-direction: column;
  }
`;

const userNameInputStyle = css`
  width: 147px;

  ${BreakPoint.Mobile()} {
    width: 100%;
  }
`;

const userBlogNameInputStyle = css`
  width: 300px;

  ${BreakPoint.Mobile()} {
    width: 100%;
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

const alarmWrapperStyle = css`
  display: flex;
  flex-direction: column;
`;
