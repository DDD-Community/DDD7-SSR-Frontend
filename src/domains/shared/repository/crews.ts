import client from 'src/domains/shared/api/client';
import { Crew, CrewRequest } from '../model/crews';

class CrewsRepository {
  getCrewsList(accountIdx: number): Promise<Crew[]> {
    return client.get(`/Crews/${accountIdx}`);
  }

  requireCrew(data: CrewRequest) {
    return client.post(`/Crews`, data);
  }

  acceptCrewRequire(data: CrewRequest) {
    return client.put(`/Crews`, data);
  }

  deleteCrew({ accepterIdx, requesterIdx }: CrewRequest) {
    return client.delete(`/Crews/${requesterIdx}/${accepterIdx}`);
  }

  requiredCrewList(accepterIdx: number) {
    return client.get(`/Crews/${accepterIdx}/required`);
  }

  getRequestCrewList(requesterIdx: number) {
    return client.get(`/Crews/${requesterIdx}/require`);
  }
}

export default new CrewsRepository();
