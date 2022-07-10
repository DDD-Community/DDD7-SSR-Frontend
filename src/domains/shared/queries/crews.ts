import { useMutation, useQuery } from 'react-query';
import { CrewRequest } from '../model/crews';
import CrewsRepository from '../repository/crews';

export const useGetCrewListQuery = (accountIdx?: number) => {
  return useQuery(['getCrewList', accountIdx], () => CrewsRepository.getCrewsList(accountIdx!), {
    enabled: !!accountIdx,
  });
};

export const useGetRequiredCrewListQuery = (accepterIdx: number) => {
  return useQuery('getRequiredCrewList', () => CrewsRepository.requiredCrewList(accepterIdx));
};

export const useGetRequestCrewListQuery = (requesterIdx: number) => {
  return useQuery('getRequestCrewList', () => CrewsRepository.getRequestCrewList(requesterIdx));
};

export const useRequireCrewMutation = () => {
  return useMutation({
    mutationFn: (data: CrewRequest) => CrewsRepository.requireCrew(data),
  });
};

export const useAcceptCrewRequireMutation = () => {
  return useMutation({
    mutationFn: (data: CrewRequest) => CrewsRepository.acceptCrewRequire(data),
  });
};

export const useDeleteCrewMutation = () => {
  return useMutation({
    mutationFn: (data: CrewRequest) => CrewsRepository.deleteCrew(data),
  });
};
