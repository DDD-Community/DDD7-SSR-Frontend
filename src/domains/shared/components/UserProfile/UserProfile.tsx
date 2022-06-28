import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import { useQuery } from 'react-query';
import { clearAuthToken } from '../../api/client';
import { useOnUser } from '../../hooks/useOnUser';
import { useUserStore } from '../../store/user';
import { Dropdown } from '../Dropdown';
import DropdownList from '../Dropdown/DropdownList';
import { UserProfileNameCard } from './UserProfileNameCard';

const UserProfile = () => {
  const { user } = useUserStore();
  const { remove } = useQuery('me');
  const router = useRouter();

  const profileDropdownList = useMemo(
    () => [
      { name: '마이페이지', callbackFn: () => {} },
      { name: '내가 쓴 글 보기', callbackFn: () => {} },
      { name: '설정페이지', callbackFn: () => {} },
      {
        name: '로그아웃',
        callbackFn: () => {
          remove();
          clearAuthToken();
          router.reload();
        },
      },
    ],
    [],
  );

  if (user['imgSrc'] !== undefined) {
    return (
      <Dropdown
        TitleComponent={<UserProfileNameCard img={user.imgSrc} userName={user.userName} />}
        listNamesAndCallback={profileDropdownList}
        ListComponent={DropdownList}
      />
    );
  }
  return <Dropdown title={user.userName} listNamesAndCallback={profileDropdownList} />;
};

export default memo(UserProfile);
