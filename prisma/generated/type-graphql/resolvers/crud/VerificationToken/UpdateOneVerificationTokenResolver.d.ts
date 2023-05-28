import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneVerificationTokenArgs } from "./args/UpdateOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class UpdateOneVerificationTokenResolver {
  updateOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneVerificationTokenArgs
  ): Promise<VerificationToken | null>;
}
