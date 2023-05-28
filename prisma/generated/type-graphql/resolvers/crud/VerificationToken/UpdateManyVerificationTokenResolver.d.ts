import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyVerificationTokenArgs } from "./args/UpdateManyVerificationTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVerificationTokenResolver {
  updateManyVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyVerificationTokenArgs
  ): Promise<AffectedRowsOutput>;
}
