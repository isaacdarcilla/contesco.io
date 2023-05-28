import { ContestantAvgAggregate } from "../outputs/ContestantAvgAggregate";
import { ContestantCountAggregate } from "../outputs/ContestantCountAggregate";
import { ContestantMaxAggregate } from "../outputs/ContestantMaxAggregate";
import { ContestantMinAggregate } from "../outputs/ContestantMinAggregate";
import { ContestantSumAggregate } from "../outputs/ContestantSumAggregate";
export declare class AggregateContestant {
  _count: ContestantCountAggregate | null;
  _avg: ContestantAvgAggregate | null;
  _sum: ContestantSumAggregate | null;
  _min: ContestantMinAggregate | null;
  _max: ContestantMaxAggregate | null;
}
