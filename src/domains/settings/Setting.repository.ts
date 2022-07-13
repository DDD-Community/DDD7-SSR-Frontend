import client from 'src/domains/shared/api/client';
import { AccountDetail } from '../shared/model/account';
import { AccountProfile, AlarmRequest } from './Setting.model';

class SettingRepository {
  saveAccountInfo(accountInfo: AccountProfile): Promise<AccountDetail> {
    return client.put(`/account/profile`, accountInfo);
  }

  withdrawalAccount(): Promise<void> {
    return client.delete('/account');
  }

  toggleAlarm(alarmData: AlarmRequest): Promise<AccountDetail> {
    return client.put('/account/alarm', alarmData);
  }
}

export default new SettingRepository();
