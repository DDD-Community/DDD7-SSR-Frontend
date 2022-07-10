import { User } from './shared';

export interface Crew extends User {}

export interface CrewRequest {
  requesterIdx: number;
  accepterIdx: number;
}
