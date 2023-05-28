import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestantArgs } from "./args/AggregateContestantArgs";
import { AggregateContestant } from "../../outputs/AggregateContestant";
export declare class AggregateContestantResolver {
  aggregateContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateContestantArgs
  ): Promise<AggregateContestant>;
}
