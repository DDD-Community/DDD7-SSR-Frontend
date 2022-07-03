import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import { clearAuthToken } from '../../api/client';
import { Dropdown } from '../Dropdown';
import DropdownList from '../Dropdown/DropdownList';
import { UserProfileNameCard } from './UserProfileNameCard';

interface UserProfileProps {
  user: User | undefined;
}

type User = { name: string; profileImg?: string };

const UserProfile = ({ user }: UserProfileProps) => {
  const router = useRouter();

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
      <Dropdown
        TitleComponent={<UserProfileNameCard img={user.profileImg} userName={user.name} />}
        listNamesAndCallback={profileDropdownList}
        ListComponent={DropdownList}
      />
    );
  }
  return <Dropdown title={user?.name} listNamesAndCallback={profileDropdownList} />;
};

export default memo(UserProfile);
