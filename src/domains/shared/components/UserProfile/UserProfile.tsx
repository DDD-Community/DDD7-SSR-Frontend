import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { memo, useCallback, useMemo, useState } from 'react';
import { clearAuthToken } from '../../api/client';
import { Dropdown } from '../Dropdown';
import DropdownList from '../Dropdown/DropdownList';
import { UserProfileNameCard } from './UserProfileNameCard';

interface UserProfileProps {
  user: User | undefined;
}

type User = { name: string; profileImg?: string };

const UserProfile = ({ user }: UserProfileProps) => {
  const [togleOnIcon, setTogleOnIcon] = useState(false);
  const router = useRouter();

  const togleIcon = useCallback(() => {
    setTogleOnIcon((state) => !state);
  }, []);

  const setTogleIcon = useCallback((booleanStatus: boolean) => {
    setTogleOnIcon(booleanStatus);
  }, []);

  const profileDropdownList = useMemo(
    () => [
      { name: '마이페이지', callbackFn: () => {} },
      { name: '내가 쓴 글 보기', callbackFn: () => {} },
      { name: '설정페이지', callbackFn: () => {} },
      {
        name: '로그아웃',
        callbackFn: () => {
          clearAuthToken();
          router.reload();
        },
      },
    ],
    [],
  );

  if (user?.profileImg !== undefined) {
    return (
      <UserProfileContainer>
        <Dropdown
          TitleComponent={<UserProfileNameCard img={user.profileImg} userName={user.name} />}
          listNamesAndCallback={profileDropdownList}
          ListComponent={DropdownList}
          setTogleIcon={setTogleIcon}
        />
        <TogleArrowContainer>
          {togleOnIcon ? (
            <div>
              <svg width="24" height="24" viewBox="-4 -4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="24" width="24" height="24" transform="rotate(90 24 0)" fill="white" fillOpacity="0.01" />
                <path
                  d="M2.90086 6.5651C2.58842 6.2527 2.58838 5.74617 2.90078 5.43373C3.19235 5.14212 3.65303 5.12264 3.96719 5.37533L4.03215 5.43365L8.0005 9.40271L11.9695 5.43369C12.2611 5.1421 12.7218 5.12266 13.0359 5.37537L13.1009 5.43369C13.3924 5.72528 13.4119 6.18597 13.1592 6.5001L13.1009 6.56506L8.56686 11.0991C8.27528 11.3906 7.81462 11.4101 7.50048 11.1574L7.43553 11.0991L2.90086 6.5651Z"
                  fill="white"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="24" width="24" height="24" transform="rotate(90 24 0)" fill="white" fillOpacity="0.01" />
                <path
                  d="M17.0989 13.4348C17.4113 13.7472 17.4114 14.2537 17.099 14.5661C16.8074 14.8578 16.3467 14.8772 16.0326 14.6245L15.9676 14.5662L11.9993 10.5972L8.03027 14.5662C7.73868 14.8578 7.27799 14.8772 6.96386 14.6245L6.8989 14.5662C6.60731 14.2746 6.58787 13.8139 6.84058 13.4998L6.8989 13.4348L11.4329 8.90082C11.7245 8.60924 12.1851 8.58979 12.4993 8.84247L12.5642 8.90078L17.0989 13.4348Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </TogleArrowContainer>
      </UserProfileContainer>
    );
  }
  return <Dropdown title={user?.name} listNamesAndCallback={profileDropdownList} />;
};

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TogleArrowContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-bottom: 10px;
`;

const TogleOnArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default memo(UserProfile);
