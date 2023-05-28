import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneVerificationTokenArgs } from "./args/UpsertOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class UpsertOneVerificationTokenResolver {
  upsertOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneVerificationTokenArgs
  ): Promise<VerificationToken>;
}
