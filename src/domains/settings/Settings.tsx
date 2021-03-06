import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef } from 'react';
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
  const profileImageRef = useRef<HTMLInputElement>(null);

  const accountDetailQuery = useAccountDetailQuery(user?.accountIdx);
  const saveAccountInfoMutation = useSaveAccountInfoMutation();
  const withdrawalMutation = useWithdrawAccountMutation();
  const toggleAlarmMutation = useToggleAlarmMutation();

  const [isShownWithdrawalConfirm, handleOpenWithdrawalConfirm, handleCloseWithDrawalConfirm] = useIsShown(false);

  const { register, watch, reset, handleSubmit, setValue, formState } = useForm<AccountProfile>();
  const { dirtyFields } = formState;
  const isEdited = Object.keys(dirtyFields).length > 0;

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
    if (!name || !blogName || !isEdited) {
      return true;
    }
    return false;
  }, [name, blogName, isEdited]);

  const handleSaveAccount = handleSubmit((data) => {
    saveAccountInfoMutation.mutate(data, {
      onSuccess: (result) => {
        toast.success('???????????? ?????????????????????.');
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

  const handleChangeProfileImage = (url: string) => {
    setValue('profileImg', url, {
      shouldDirty: true,
    });
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
          ????????? ??????
        </Text>
        <Spacing col={35} />
        <section css={userInfoContainerStyle}>
          <form onSubmit={handleSaveAccount}>
            <div css={userProfileBaseInfoStyle}>
              <div css={userProfileImageWrapperStyle}>
                <ProfileImage
                  ref={profileImageRef}
                  src={profileImg || undefined}
                  updatable
                  onChange={handleChangeProfileImage}
                />

                <div>
                  {isMobile && (
                    <>
                      <Button
                        type="button"
                        color="Primary100"
                        size="large"
                        onClick={() => {
                          console.log(profileImageRef.current);
                          profileImageRef.current?.click();
                        }}
                      >
                        ????????? ?????????
                      </Button>
                      <Spacing col={12} />
                    </>
                  )}

                  {profileImg && (
                    <>
                      <Spacing col={isMobile ? 0 : 14} />
                      <Button
                        type="button"
                        color="Gray500"
                        size="large"
                        onClick={() => {
                          setValue('profileImg', '', { shouldDirty: true });
                        }}
                      >
                        ????????? ??????
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <Spacing row={isMobile ? 0 : 29} col={isMobile ? 27 : 0} />
              <div css={userProfileInfoInputWrapperStyle}>
                <div css={userProfileInputWrapperStyle}>
                  <TextInput css={userNameInputStyle} placeholder="???????????? ??????????????????." {...register('name')} />
                  <Spacing row={isMobile ? 0 : 8} col={isMobile ? 12 : 0} />
                  <TextInput
                    css={userBlogNameInputStyle}
                    placeholder="??????????????? ??????????????????."
                    {...register('blogName')}
                  />
                </div>

                <Spacing col={10} />
                <Textarea
                  placeholder="???????????? ??????????????????."
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
                  <Text type="body14">????????????</Text>
                </Button>
              </div>
            </div>
          </form>

          <Spacing col={69} />

          <section css={userProfileDetailWrapperStyle}>
            <ProfileInfoRow labelText="?????????">
              <span>{accountDetailQuery.data?.profileId}</span>
            </ProfileInfoRow>
            <ProfileInfoRow labelText="?????? ?????? ??????">
              <div css={flexBoxStyle}>
                <Image src={platformUrl} alt={`${accountDetailQuery.data?.platform}-icon`} width={27} height={27} />
                <Spacing row={7} />
                <Text type="tag12">{accountDetailQuery.data?.email}</Text>
              </div>
            </ProfileInfoRow>

            <ProfileInfoRow labelText="????????? ?????? ??????">
              <div css={alarmWrapperStyle}>
                <div css={flexBoxStyle}>
                  <Text type="tag12">????????? ?????? ????????? ????????? ?????? ????????? ???????????????.</Text>
                  <Spacing row={12} />
                  <Switch checked={accountDetailQuery.data?.alarmAgree === 'Y' || false} onChange={handleToggleAlarm} />
                </div>
                <Spacing col={16} />
                <div css={flexBoxStyle}>
                  <Text type="tag12">?????????????????? ???????????? ????????? ???????????????..</Text>
                  <Spacing row={12} />
                  <Switch
                    checked={accountDetailQuery.data?.emailAgree === 'Y' || false}
                    onChange={handleToggleEmailAlarm}
                  />
                </div>
              </div>
            </ProfileInfoRow>

            <ProfileInfoRow labelText="?????? ??????">
              <div>
                <Button type="button" color="Red100" fixedWidth={119} onClick={handleOpenWithdrawalConfirm}>
                  ?????? ????????????
                </Button>
                <Spacing col={15} />
                <div>?????? ???, ???????????? ??? ??? ????????? ?????? ???????????? ???????????? ????????????.</div>
              </div>
            </ProfileInfoRow>
          </section>
        </section>
      </section>

      <Confirm
        isShown={isShownWithdrawalConfirm}
        onClose={handleCloseWithDrawalConfirm}
        description="?????? ???????????????????"
        buttonText="????????????"
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
  flex-direction: column;

  flex: 1 0 auto;

  ${BreakPoint.Mobile()} {
    flex-direction: row;
    justify-content: space-between;
  }

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
