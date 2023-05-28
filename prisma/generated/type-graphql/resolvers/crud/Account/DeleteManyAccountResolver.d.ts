import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAccountResolver {
  deleteManyAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyAccountArgs
  ): Promise<AffectedRowsOutput>;
}
