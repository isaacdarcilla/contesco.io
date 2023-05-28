import type { GraphQLResolveInfo } from "graphql";
import { GroupByContestantArgs } from "./args/GroupByContestantArgs";
import { ContestantGroupBy } from "../../outputs/ContestantGroupBy";
export declare class GroupByContestantResolver {
  groupByContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByContestantArgs
  ): Promise<ContestantGroupBy[]>;
}
