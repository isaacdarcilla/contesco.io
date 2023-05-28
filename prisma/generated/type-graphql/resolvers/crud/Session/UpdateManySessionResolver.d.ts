import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySessionArgs } from "./args/UpdateManySessionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySessionResolver {
  updateManySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManySessionArgs
  ): Promise<AffectedRowsOutput>;
}
