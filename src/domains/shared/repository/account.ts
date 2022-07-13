import client from 'src/domains/shared/api/client';
import { AccountDetail } from '../model/account';

class AccountRepository {
  getAccountDetail(accountIdx: number): Promise<AccountDetail> {
    return client.get(`/account/${accountIdx}`);
  }
}

export default new AccountRepository();
