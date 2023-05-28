import type { GraphQLResolveInfo } from "graphql";
import { GroupByAccountArgs } from "./args/GroupByAccountArgs";
import { AccountGroupBy } from "../../outputs/AccountGroupBy";
export declare class GroupByAccountResolver {
  groupByAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByAccountArgs
  ): Promise<AccountGroupBy[]>;
}
