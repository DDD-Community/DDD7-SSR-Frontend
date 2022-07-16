export interface PaginationData<T> {
  content: T;
  totalElements: number;
  totalPages: number;
}

export interface User {
  accountIdx: number;
  email: string;
  name: string;
  platform: string;
  profileImg: string | null;
  role: string;
  withdrawal: string;
  alarmAgree: string;
  blogName: string;
  createDate: string;
  emailAgree: string;
  introduction: string | null;
  updateDate: string;
}
