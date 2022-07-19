import client from '../shared/api/client';
import { DeleteNotificationsRequest, GetNotificationsRequest, GetNotificationsResponse } from './Notification.model';

class NotificationRepository {
  getNotifications({ size, page }: GetNotificationsRequest): Promise<GetNotificationsResponse> {
    return client.get(`/friends/notice?page=${page}&size=${size}`);
  }
  deleteNotifications({ requesterIdx, accepterIdx }: DeleteNotificationsRequest) {
    return client.delete(`/friends/notice/${requesterIdx}/${accepterIdx}`);
  }
}

export default new NotificationRepository();
