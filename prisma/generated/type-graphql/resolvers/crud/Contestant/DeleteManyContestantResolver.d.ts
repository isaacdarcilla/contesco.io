import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyContestantArgs } from "./args/DeleteManyContestantArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyContestantResolver {
  deleteManyContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyContestantArgs
  ): Promise<AffectedRowsOutput>;
}
