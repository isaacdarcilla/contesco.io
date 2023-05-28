import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneVerificationTokenArgs } from "./args/DeleteOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class DeleteOneVerificationTokenResolver {
  deleteOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneVerificationTokenArgs
  ): Promise<VerificationToken | null>;
}
