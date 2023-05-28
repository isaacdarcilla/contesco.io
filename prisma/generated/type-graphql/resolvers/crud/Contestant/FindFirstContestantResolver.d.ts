import type { GraphQLResolveInfo } from "graphql";
import { FindFirstContestantArgs } from "./args/FindFirstContestantArgs";
import { Contestant } from "../../../models/Contestant";
export declare class FindFirstContestantResolver {
  findFirstContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstContestantArgs
  ): Promise<Contestant | null>;
}
