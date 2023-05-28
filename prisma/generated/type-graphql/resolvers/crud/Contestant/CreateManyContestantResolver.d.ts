import type { GraphQLResolveInfo } from "graphql";
import { CreateManyContestantArgs } from "./args/CreateManyContestantArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyContestantResolver {
  createManyContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyContestantArgs
  ): Promise<AffectedRowsOutput>;
}
