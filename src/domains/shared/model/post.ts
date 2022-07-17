import { User } from './shared';

export interface PostBase {
  title: string;
  contents: string;
  thumbnailImg?: string;
  thumbnailContents: string;
}

export interface PostCreate extends PostBase {
  coWriter: {
    accountIdx: number[];
    realWriter: number;
  };
  privated: 'Y' | 'N';
}

export interface PostDetail extends PostBase {
  postIdx: number;
  boardCount: number;
  coWriter: {
    coWriterInfo: User[];
    realWriterInfo: User;
  };
  privated: 'Y' | 'N';
  createDate: string;
  updateDate: string;
  deleted: 'Y' | 'N';
}
