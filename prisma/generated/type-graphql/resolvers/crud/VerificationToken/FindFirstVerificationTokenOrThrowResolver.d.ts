import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVerificationTokenOrThrowArgs } from "./args/FindFirstVerificationTokenOrThrowArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class FindFirstVerificationTokenOrThrowResolver {
  findFirstVerificationTokenOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstVerificationTokenOrThrowArgs
  ): Promise<VerificationToken | null>;
}
