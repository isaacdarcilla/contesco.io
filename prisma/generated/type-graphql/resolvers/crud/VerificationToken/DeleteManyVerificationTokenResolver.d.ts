import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyVerificationTokenArgs } from "./args/DeleteManyVerificationTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVerificationTokenResolver {
  deleteManyVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyVerificationTokenArgs
  ): Promise<AffectedRowsOutput>;
}
