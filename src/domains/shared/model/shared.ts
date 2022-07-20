export interface PaginationData<T> {
  content: T;
  totalElements: number;
  totalPages: number;
}

export type Platform = 'google' | 'kakao' | 'naver';
export interface User {
  accountIdx: number;
  email: string;
  name: string;
  profileImg?: string;
  role: string;
  withdrawal: string;
  alarmAgree: string;
  blogName: string;
  createDate: string;
  emailAgree: string;
  introduction: string;
  updateDate: string;
  platform: Platform;
}

export interface UserProfile {
  accountIdx: number;
  name: string;
  profileImg: string;
}

export type AcceptOrWating = 'Y' | 'N' | 'W';
