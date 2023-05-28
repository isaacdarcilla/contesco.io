import type { GraphQLResolveInfo } from "graphql";
import { FindManyVerificationTokenArgs } from "./args/FindManyVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class FindManyVerificationTokenResolver {
  verificationTokens(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyVerificationTokenArgs
  ): Promise<VerificationToken[]>;
}
