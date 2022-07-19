import client from '../shared/api/client';
import { GetNotificationsRequest, GetNotificationsResponse } from './Notification.model';

class NotificationRepository {
  async getNotifications({ size, page }: GetNotificationsRequest): Promise<GetNotificationsResponse> {
    return client.get(`/friends/notice?page=${page}&size=${size}`);
  }
}

export default new NotificationRepository();
