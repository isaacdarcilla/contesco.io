import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";
export declare class AggregateAccount {
  _count: AccountCountAggregate | null;
  _avg: AccountAvgAggregate | null;
  _sum: AccountSumAggregate | null;
  _min: AccountMinAggregate | null;
  _max: AccountMaxAggregate | null;
}
