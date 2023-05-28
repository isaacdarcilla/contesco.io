import type { GraphQLResolveInfo } from "graphql";
import { GroupByEventArgs } from "./args/GroupByEventArgs";
import { EventGroupBy } from "../../outputs/EventGroupBy";
export declare class GroupByEventResolver {
  groupByEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByEventArgs
  ): Promise<EventGroupBy[]>;
}
