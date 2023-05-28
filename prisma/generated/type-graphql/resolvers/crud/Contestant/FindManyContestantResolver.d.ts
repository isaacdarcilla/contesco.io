import type { GraphQLResolveInfo } from "graphql";
import { FindManyContestantArgs } from "./args/FindManyContestantArgs";
import { Contestant } from "../../../models/Contestant";
export declare class FindManyContestantResolver {
  contestants(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyContestantArgs
  ): Promise<Contestant[]>;
}
