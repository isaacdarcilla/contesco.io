import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVerificationTokenArgs } from "./args/FindFirstVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class FindFirstVerificationTokenResolver {
  findFirstVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstVerificationTokenArgs
  ): Promise<VerificationToken | null>;
}
