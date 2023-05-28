import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyContestantArgs } from "./args/UpdateManyContestantArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyContestantResolver {
  updateManyContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyContestantArgs
  ): Promise<AffectedRowsOutput>;
}
