export interface UserProfileInfo {
  blogName: string;
  blogDescription: string;
  isAllowEmail?: boolean;
}

export interface SaveUserInfoRequest {
  userId: string;
  userInfo: UserProfileInfo;
}
