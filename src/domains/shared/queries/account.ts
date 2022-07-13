import { useQuery } from 'react-query';
import AccountRepository from '../repository/account';

export const useAccountDetailQuery = (accountIdx?: number) => {
  return useQuery(['AccountDetail', accountIdx], () => AccountRepository.getAccountDetail(accountIdx!), {
    enabled: !!accountIdx,
  });
};
