import client from 'src/domains/shared/api/client';

class SettingRepository {
  getUserInfo(userId: string): Promise<void> {
    return client.get(`/used/${userId}`);
  }

  saveUserInfo({ userId, userInfo }: SaveUserInfoRequest): Promise<UserProfileInfo> {
    return client.put(`/user/${userId}`, userInfo);
  }

  withdrawUser(): Promise<void> {
    return client.delete('/user');
  }

  toggleEmailReceive(): Promise<void> {
    return client.put('/email');
  }
}

export default new SettingRepository();
