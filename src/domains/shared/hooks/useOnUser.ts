import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { clearAuthToken, setAuthToken } from '../api/client';
import { useUserStore } from '../store/user';

type userOnUserResult = [boolean, ({ token, refreshToken }: TokenSet) => void, () => void];

interface TokenSet {
  token: string | string[] | undefined;
  refreshToken: string | string[] | undefined;
}

export const useOnUser = (): userOnUserResult => {
  const { isLoggedIn, login, logout } = useUserStore();
  const router = useRouter();

  const setLoginWithTokens = ({ token, refreshToken }: TokenSet) => {
    setAuthToken(token);
    localStorage.setItem('refreshToken', refreshToken);

    // 백엔드에서 내 정보 가져오기 기능으로 이름과 사진 가져오는 로직 필요

    login({ userName: 'peter', imgSrc: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg' });
  };

  const setLogout = () => {
    clearAuthToken();
    localStorage.removeItem('refreshToken');
    logout();
    router.push('/');
  };

  return [isLoggedIn, setLoginWithTokens, setLogout];
};
