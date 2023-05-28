import { SessionCountAggregate } from "../outputs/SessionCountAggregate";
import { SessionMaxAggregate } from "../outputs/SessionMaxAggregate";
import { SessionMinAggregate } from "../outputs/SessionMinAggregate";
export declare class AggregateSession {
  _count: SessionCountAggregate | null;
  _min: SessionMinAggregate | null;
  _max: SessionMaxAggregate | null;
}
