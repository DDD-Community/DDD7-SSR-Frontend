import { useQuery, useMutation } from 'react-query';
import { SaveUserInfoRequest } from './Setting.model';
import SettingRepository from './Setting.repository';

export const useGetUserInfo = (userId: string) =>
  useQuery(['GetUserInfo', userId], () => SettingRepository.getUserInfo(userId), {
    enabled: !!userId,
  });

export const useSaveUserInfoMutation = ({ userId, userInfo }: SaveUserInfoRequest) =>
  useMutation(() => SettingRepository.saveUserInfo({ userId, userInfo }));

export const useWithdrawUserMutation = () => useMutation(() => SettingRepository.withdrawUser());

export const useToggleEmailReceiveMutation = () => useMutation(() => SettingRepository.toggleEmailReceive());
