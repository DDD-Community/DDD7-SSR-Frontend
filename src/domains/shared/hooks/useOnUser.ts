import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { clearAuthToken, setAuthToken } from '../api/client';
import { useUserStore } from '../store/user';

type userOnUserResult = [({ token, refreshToken }: TokenSet) => void];

interface TokenSet {
  token: string;
  refreshToken: string;
}

export const useOnUser = (): userOnUserResult => {
  const { login } = useUserStore();

  const setLoginWithTokens = ({ token, refreshToken }: TokenSet) => {
    localStorage.setItem('dewsToken', token);
    localStorage.setItem('dewsRefreshToken', refreshToken);

    // 백엔드에서 내 정보 가져오기 기능으로 이름과 사진 가져오는 로직 필요
    login({ userName: 'peter', imgSrc: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg' });
  };

  return [setLoginWithTokens];
};
