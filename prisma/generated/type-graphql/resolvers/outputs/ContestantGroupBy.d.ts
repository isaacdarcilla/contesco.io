import { ContestantAvgAggregate } from "../outputs/ContestantAvgAggregate";
import { ContestantCountAggregate } from "../outputs/ContestantCountAggregate";
import { ContestantMaxAggregate } from "../outputs/ContestantMaxAggregate";
import { ContestantMinAggregate } from "../outputs/ContestantMinAggregate";
import { ContestantSumAggregate } from "../outputs/ContestantSumAggregate";
export declare class ContestantGroupBy {
  id: string;
  eventId: string;
  userId: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  gender: string;
  age: number;
  nationality: string | null;
  birthDate: string | null;
  phoneNumber: string;
  email: string;
  photo: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  _count: ContestantCountAggregate | null;
  _avg: ContestantAvgAggregate | null;
  _sum: ContestantSumAggregate | null;
  _min: ContestantMinAggregate | null;
  _max: ContestantMaxAggregate | null;
}
