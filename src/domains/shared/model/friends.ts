export interface Friend {
  accountIdx: number;
  email: string;
  name: string;
  platform: string;
  profileImg: string;
  role: string;
  withdrawal: string;
}

export interface FriendRequest {
  requesterIdx: string;
  accepterIdx: string;
}
