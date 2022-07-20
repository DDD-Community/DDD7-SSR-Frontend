import { Platform } from './shared';

export interface AccountDetail {
  accountIdx: number;
  profileImg?: string;
  profileId: string;
  name: string;
  blogName: string;
  introduction: string;
  email: string;
  platform: Platform;

  commentCount: number;
  crewCount: number;
  postCount: number;

  isCrew: 'N' | 'Y' | 'W';
  owner: boolean;
  alarmAgree: 'Y' | 'N';
  emailAgree: 'Y' | 'N';
}
