import client from 'src/domains/shared/api/client';
import { Crew, CrewRequest } from '../model/crews';

class CrewsRepository {
  getCrewsList(accountIdx: number): Promise<Crew[]> {
    return client.get(`/friends/${accountIdx}`);
  }

  requireCrew(data: CrewRequest) {
    return client.post(`/friends`, data);
  }

  acceptCrewRequire(data: CrewRequest) {
    return client.put(`/friends`, data);
  }

  deleteCrew({ accepterIdx, requesterIdx }: CrewRequest) {
    return client.delete(`/friends/${requesterIdx}/${accepterIdx}`);
  }

  requiredCrewList(accepterIdx: number) {
    return client.get(`/friends/${accepterIdx}/required`);
  }

  getRequestCrewList(requesterIdx: number) {
    return client.get(`/friends/${requesterIdx}/require`);
  }
}

export default new CrewsRepository();
