import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAccountResolver {
  updateManyAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyAccountArgs
  ): Promise<AffectedRowsOutput>;
}
