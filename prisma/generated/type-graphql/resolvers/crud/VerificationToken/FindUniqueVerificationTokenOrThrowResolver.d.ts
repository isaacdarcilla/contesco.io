import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVerificationTokenOrThrowArgs } from "./args/FindUniqueVerificationTokenOrThrowArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class FindUniqueVerificationTokenOrThrowResolver {
  getVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueVerificationTokenOrThrowArgs
  ): Promise<VerificationToken | null>;
}
