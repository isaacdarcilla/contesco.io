import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyEventArgs } from "./args/DeleteManyEventArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEventResolver {
  deleteManyEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyEventArgs
  ): Promise<AffectedRowsOutput>;
}
