import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Color, FontSize } from '../../constants';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import useUser from '../../hooks/useUser';
import { clearAuthToken } from '../../api/client';
import { useRouter } from 'next/router';
import { useLoginModalStore } from '../../store/loginModal';

const TabMenu = ({ closeTabMenu }: { closeTabMenu: () => void }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useMediaQuery();
  const router = useRouter();
  const user = useUser();
  const { showOnModal } = useLoginModalStore();

  useOnClickOutside(ref, () => {
    closeTabMenu();
  });

  const tabMenuList = [
    {
      name: '마이페이지',
      callbackFn: () => {
        router.reload();

        router.push('/author/1');
      },
    },
    {
      name: '내가 쓴 글 보기',
      callbackFn: () => {
        router.push('/author/my-post');
      },
    },
    {
      name: '설정페이지',
      callbackFn: () => {
        router.push('/settings');
      },
    },
    {
      name: '로그아웃',
      callbackFn: () => {
        clearAuthToken();
        router.reload();
        closeTabMenu();
      },
    },
  ];

  useEffect(() => {
    if (!isMobile) {
      closeTabMenu();
    }
  }, [isMobile]);

  return (
    <TabMenuContainer ref={ref}>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div style={{ cursor: 'pointer' }} onClick={closeTabMenu}>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="white" fillOpacity="0.01" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.6451 4.36708C19.1718 3.89382 18.4073 3.89382 17.934 4.36708L12 10.289L6.06598 4.35495C5.59272 3.88168 4.82821 3.88168 4.35495 4.35495C3.88168 4.82821 3.88168 5.59272 4.35495 6.06598L10.289 12L4.35495 17.934C3.88168 18.4073 3.88168 19.1718 4.35495 19.6451C4.82821 20.1183 5.59272 20.1183 6.06598 19.6451L12 13.711L17.934 19.6451C18.4073 20.1183 19.1718 20.1183 19.6451 19.6451C20.1183 19.1718 20.1183 18.4073 19.6451 17.934L13.711 12L19.6451 6.06598C20.1062 5.60485 20.1062 4.82821 19.6451 4.36708Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.0001 19.2728H19.6365V9.76487C19.6365 5.92458 16.7867 2.73775 13.091 2.20684V1.45462C13.091 0.852145 12.6026 0.363708 12.0001 0.363708C11.3976 0.363708 10.9092 0.852145 10.9092 1.45462V2.20684C7.21347 2.73782 4.36373 5.92458 4.36373 9.76487V19.2728H4.00009C3.39762 19.2728 2.90918 19.7612 2.90918 20.3637C2.90918 20.9662 3.39762 21.4546 4.00009 21.4546H8.915C9.3654 22.7243 10.5779 23.6364 12.0001 23.6364C13.4223 23.6364 14.6348 22.7243 15.0852 21.4546H20.0001C20.6026 21.4546 21.091 20.9662 21.091 20.3637C21.091 19.7612 20.6026 19.2728 20.0001 19.2728ZM6.54554 9.76487C6.54554 6.75724 8.99245 4.3104 12.0001 4.3104C15.0077 4.3104 17.4546 6.75724 17.4546 9.76487V19.2728H6.54554V9.76487Z"
                fill="white"
              />
              <circle cx="22" cy="2" r="2" fill="#3C6EEB" />
            </svg>
          </span>
        </div>
      </div>
      <div
        css={css`
          margin-top: 80px;
        `}
      >
        {user ? (
          <UserProfileImgCircle>
            {user.profileImg ? <Image src={user.profileImg} alt="*" width={100} height={100} /> : null}
          </UserProfileImgCircle>
        ) : (
          <span>
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="31" cy="31" r="31" fill="#34353A" />
              <path
                d="M17.5576 47.1856C17.5576 47.1856 14.8142 47.1856 14.8142 44.4422C14.8142 41.6989 17.5576 33.4688 31.2744 33.4688C44.9912 33.4688 47.7346 41.6989 47.7346 44.4422C47.7346 47.1856 44.9912 47.1856 44.9912 47.1856H17.5576ZM31.2744 30.7254C33.4571 30.7254 35.5505 29.8583 37.0939 28.3149C38.6374 26.7715 39.5045 24.6781 39.5045 22.4953C39.5045 20.3126 38.6374 18.2192 37.0939 16.6758C35.5505 15.1324 33.4571 14.2653 31.2744 14.2653C29.0916 14.2653 26.9983 15.1324 25.4548 16.6758C23.9114 18.2192 23.0443 20.3126 23.0443 22.4953C23.0443 24.6781 23.9114 26.7715 25.4548 28.3149C26.9983 29.8583 29.0916 30.7254 31.2744 30.7254Z"
                fill="#7F7F83"
              />
            </svg>
          </span>
        )}
      </div>
      <div
        onClick={showOnModal}
        css={css`
          color: ${Color.White100};
          font-size: ${FontSize.Large};
          margin-top: 12px;
          cursor: pointer;
        `}
      >
        {user ? <span>{user?.name}</span> : <span>클릭해서 로그인하기</span>}
      </div>
      {user && (
        <div
          css={css`
            color: ${Color.White100};
            font-size: 20px;
            margin-top: 60px;
            height: 176px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          `}
        >
          {tabMenuList.map((menu) => (
            <TabMenuElement key={menu.name} onClick={menu.callbackFn}>
              {menu.name}
            </TabMenuElement>
          ))}
        </div>
      )}
    </TabMenuContainer>
  );
};

const TabMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: ${Color.Gray800};
  z-index: 2;
  padding: 24px;
`;

const UserProfileImgCircle = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 100px;
  overflow: hidden;
  background-color: 'yellow';
`;

const TabMenuElement = styled.div`
  cursor: pointer;
`;

export default TabMenu;
