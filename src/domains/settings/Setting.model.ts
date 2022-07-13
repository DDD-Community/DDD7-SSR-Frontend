export interface AccountProfile {
  name: string;
  profileImg: string;
  blogName: string;
  introduction: string;
}

export interface AlarmRequest {
  emailAgree: 'Y' | 'N';
  alarmAgree: 'Y' | 'N';
}
