import type { GraphQLResolveInfo } from "graphql";
import { GroupBySessionArgs } from "./args/GroupBySessionArgs";
import { SessionGroupBy } from "../../outputs/SessionGroupBy";
export declare class GroupBySessionResolver {
  groupBySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupBySessionArgs
  ): Promise<SessionGroupBy[]>;
}
