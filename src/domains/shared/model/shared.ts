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
  introduction: string;
  role: string;
  withdrawal: string;
}
