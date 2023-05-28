import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySessionArgs } from "./args/DeleteManySessionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySessionResolver {
  deleteManySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManySessionArgs
  ): Promise<AffectedRowsOutput>;
}
