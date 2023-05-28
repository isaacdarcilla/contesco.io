import type { GraphQLResolveInfo } from "graphql";
import { AggregateEventArgs } from "./args/AggregateEventArgs";
import { AggregateEvent } from "../../outputs/AggregateEvent";
export declare class AggregateEventResolver {
  aggregateEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateEventArgs
  ): Promise<AggregateEvent>;
}
