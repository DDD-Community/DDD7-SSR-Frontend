import { useMutation, useQuery } from 'react-query';
import { FriendRequest } from '../model/friends';
import FriendsRepository from '../repository/friends';

export const useGetFriendsListQuery = (accountIdx: number) => {
  return useQuery(['getFriendList', accountIdx], () => FriendsRepository.getFriendsList(accountIdx));
};

export const useGetRequiredFriendListQuery = (accepterIdx: string) => {
  return useQuery('getRequiredFriendList', () => FriendsRepository.requiredFriendList(accepterIdx));
};

export const useGetRequestFriendListQuery = (requesterIdx: string) => {
  return useQuery('getRequestFriendList', () => FriendsRepository.getRequestFriendList(requesterIdx));
};

export const useRequireFriendMutation = () => {
  return useMutation({
    mutationFn: (data: FriendRequest) => FriendsRepository.requireFriend(data),
  });
};

export const useAcceptFriendRequireMutation = () => {
  return useMutation({
    mutationFn: (data: FriendRequest) => FriendsRepository.acceptFriendRequire(data),
  });
};

export const useDeleteFriendMutation = () => {
  return useMutation({
    mutationFn: (data: FriendRequest) => FriendsRepository.deleteFriend(data),
  });
};
