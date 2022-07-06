import { useQuery, useMutation } from 'react-query';
import { SaveUserInfoRequest } from '../settings/Setting.model';
import SettingRepository from '../settings/Setting.repository';

export const useGetUserInfo = (userId: string) =>
  useQuery(['GetUserInfo', userId], () => SettingRepository.getUserInfo(userId), {
    enabled: !!userId,
  });

export const useSaveUserInfoMutation = ({ userId, userInfo }: SaveUserInfoRequest) =>
  useMutation(() => SettingRepository.saveUserInfo({ userId, userInfo }));

export const useWithdrawUserMutation = () => useMutation(() => SettingRepository.withdrawUser());

export const useToggleEmailReceiveMutation = () => useMutation(() => SettingRepository.toggleEmailReceive());
