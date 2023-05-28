import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyEventArgs } from "./args/UpdateManyEventArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEventResolver {
  updateManyEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyEventArgs
  ): Promise<AffectedRowsOutput>;
}
