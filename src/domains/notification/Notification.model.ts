import { AcceptOrWating, PaginationData, UserProfile } from '../shared/model/shared';

export interface GetNotificationsRequest {
  page: number;
  size: number;
}

export interface DeleteNotificationsRequest {
  requesterIdx: number;
  accepterIdx: number;
}

export type Notification = {
  requesterIdx: UserProfile;
  accepterIdx: UserProfile;
  accepted: AcceptOrWating;
  requesterNoticeCheckYn: AcceptOrWating;
  requesterNoticeDelYn: AcceptOrWating;
  accepterNoticeCheckYn: AcceptOrWating;
  accepterNoticeDelYn: AcceptOrWating;
  requestDateTime: string;
  acceptedDateTime: string;
};

export type GetNotificationsResponse = PaginationData<Notification>;
