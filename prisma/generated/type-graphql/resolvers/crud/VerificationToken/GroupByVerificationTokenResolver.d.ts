import type { GraphQLResolveInfo } from "graphql";
import { GroupByVerificationTokenArgs } from "./args/GroupByVerificationTokenArgs";
import { VerificationTokenGroupBy } from "../../outputs/VerificationTokenGroupBy";
export declare class GroupByVerificationTokenResolver {
  groupByVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByVerificationTokenArgs
  ): Promise<VerificationTokenGroupBy[]>;
}
