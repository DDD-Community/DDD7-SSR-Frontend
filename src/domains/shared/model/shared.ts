export interface PaginationData<T> {
  content: T;
  totalElements: number;
  totalPages: number;
}

export type Platform = 'google' | 'kakao';
export interface User {
  accountIdx: number;
  email: string;
  name: string;
  profileImg: string | null;
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
