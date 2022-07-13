import { useMutation } from 'react-query';
import { AccountProfile, AlarmRequest } from './Setting.model';
import SettingRepository from './Setting.repository';

export const useSaveAccountInfoMutation = () =>
  useMutation((data: AccountProfile) => SettingRepository.saveAccountInfo(data));

export const useWithdrawAccountMutation = () => useMutation(() => SettingRepository.withdrawalAccount());

export const useToggleAlarmMutation = () =>
  useMutation((alarmData: AlarmRequest) => SettingRepository.toggleAlarm(alarmData));
