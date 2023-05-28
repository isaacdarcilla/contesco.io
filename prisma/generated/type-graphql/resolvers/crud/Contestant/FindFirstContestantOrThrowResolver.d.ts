import type { GraphQLResolveInfo } from "graphql";
import { FindFirstContestantOrThrowArgs } from "./args/FindFirstContestantOrThrowArgs";
import { Contestant } from "../../../models/Contestant";
export declare class FindFirstContestantOrThrowResolver {
  findFirstContestantOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstContestantOrThrowArgs
  ): Promise<Contestant | null>;
}
