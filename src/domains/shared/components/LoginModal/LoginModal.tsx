import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BASE_URL, Color, OAUTH_URL, REQUEST_AUTH_URL } from '../../constants';
import { Icon } from '../Icon';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <LoginModalContainer>
      <LoginModalTitle>로그인</LoginModalTitle>
      <LoginModalCloseBtn onClick={onClose}>
        <Icon icon="Close" size={50} color={`${Color.White100}`} />
      </LoginModalCloseBtn>
      <LoginModalMethodContainer>
        <LoginModalGoogleContainer>
          <Link href={`${OAUTH_URL}/oauth2/authorization/google`} passHref>
            <LoginModalSocialBtn>
              <div css={LoginModalSocialTextContainer}>
                <div css={LoginModalSocialText}>
                  구글로 로그인
                  <div css={LoginModalSocialIcon}>
                    <Image src="/googleIcon.png" alt="google" width={27} height={27} />
                  </div>
                </div>
              </div>
            </LoginModalSocialBtn>
          </Link>
        </LoginModalGoogleContainer>
        <LoginModalKakaoContainer>
          <Link href={`${OAUTH_URL}/oauth2/authorization/kakao`} passHref>
            <LoginModalSocialBtn>
              <div css={LoginModalSocialTextContainer}>
                <div css={LoginModalSocialKakaoText}>
                  카카오톡으로 로그인
                  <div css={LoginModalSocialIcon}>
                    <Image src="/kakaoIcon.png" alt="google" width={32} height={32} />
                  </div>
                </div>
              </div>
            </LoginModalSocialBtn>
          </Link>
        </LoginModalKakaoContainer>
        <LoginModalNaverContainer>
          <Link href={`${OAUTH_URL}/oauth2/authorization/naver`} passHref>
            <LoginModalSocialBtn>
              <div css={LoginModalSocialTextContainer}>
                <div css={LoginModalSocialKakaoText}>
                  네이버로 로그인
                  <div css={LoginModalSocialIconNaver}>
                    <Image src="/naverIcon.png" alt="google" width={20} height={19} />
                  </div>
                </div>
              </div>
            </LoginModalSocialBtn>
          </Link>
        </LoginModalNaverContainer>
      </LoginModalMethodContainer>
    </LoginModalContainer>
  );
};

const LoginModalContainer = styled.div`
  padding-top: 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginModalTitle = styled.div`
  color: ${Color.White100};
  font-size: 20px;
  font-weight: bold;
`;

const LoginModalCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
`;

const LoginModalMethodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  width: 275px;
  height: 180px;
`;

const LoginModalSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 54px;
  border-radius: 8px;
`;

const LoginModalGoogleContainer = styled(LoginModalSocialContainer)`
  background-color: ${Color.White100};
`;

const LoginModalKakaoContainer = styled(LoginModalSocialContainer)`
  background-color: #ffe812;
`;

const LoginModalNaverContainer = styled(LoginModalSocialContainer)`
  background-color: #37cf5b;
`;

const LoginModalSocialBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  height: 100%;
`;

const LoginModalSocialTextContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginModalSocialText = css`
  position: relative;
  margin-left: 8%;
`;

const LoginModalSocialKakaoText = css`
  position: relative;
  margin-left: 10%;
`;

const LoginModalSocialIcon = css`
  position: absolute;
  top: -35%;
  left: -40px;
`;

const LoginModalSocialIconNaver = css`
  position: absolute;
  top: -10%;
  left: -32px;
`;

export default LoginModal;
