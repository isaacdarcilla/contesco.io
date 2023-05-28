import { VerificationTokenCountAggregate } from "../outputs/VerificationTokenCountAggregate";
import { VerificationTokenMaxAggregate } from "../outputs/VerificationTokenMaxAggregate";
import { VerificationTokenMinAggregate } from "../outputs/VerificationTokenMinAggregate";
export declare class AggregateVerificationToken {
  _count: VerificationTokenCountAggregate | null;
  _min: VerificationTokenMinAggregate | null;
  _max: VerificationTokenMaxAggregate | null;
}
