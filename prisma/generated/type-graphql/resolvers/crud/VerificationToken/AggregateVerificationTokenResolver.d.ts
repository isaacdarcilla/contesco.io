import type { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationTokenArgs } from "./args/AggregateVerificationTokenArgs";
import { AggregateVerificationToken } from "../../outputs/AggregateVerificationToken";
export declare class AggregateVerificationTokenResolver {
  aggregateVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateVerificationTokenArgs
  ): Promise<AggregateVerificationToken>;
}
