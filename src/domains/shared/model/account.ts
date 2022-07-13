export interface AccountDetail {
  accountIdx: number;
  profileImg?: string;
  profileId: string;
  name: string;
  blogName: string;
  introduction: string;
  email: string;

  commentCount: number;
  crewCount: number;
  postCount: number;

  crew: boolean;
  owner: boolean;
  alarmAgree: 'Y' | 'N';
  emailAgree: 'Y' | 'N';
}
