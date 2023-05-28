import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVerificationTokenArgs } from "./args/FindUniqueVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class FindUniqueVerificationTokenResolver {
  verificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueVerificationTokenArgs
  ): Promise<VerificationToken | null>;
}
