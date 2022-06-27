import client from 'src/domains/shared/api/client';
import { Friend, FriendRequest } from '../model/friends';

class FriendsRepository {
  getFriendsList(accountIdx: string): Promise<Friend[]> {
    return client.get(`/friends/${accountIdx}`);
  }

  requireFriend(data: FriendRequest) {
    return client.post(`/friends`, data);
  }

  acceptFriendRequire(data: FriendRequest) {
    return client.put(`/friends`, data);
  }

  deleteFriend({ accepterIdx, requesterIdx }: FriendRequest) {
    return client.delete(`/friends/${requesterIdx}/${accepterIdx}`);
  }

  requiredFriendList(accepterIdx: string) {
    return client.get(`/friends/${accepterIdx}/required`);
  }

  getRequestFriendList(requesterIdx: string) {
    return client.get(`/friends/${requesterIdx}/require`);
  }
}

export default new FriendsRepository();
