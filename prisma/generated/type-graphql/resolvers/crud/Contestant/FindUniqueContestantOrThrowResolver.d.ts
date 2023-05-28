import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueContestantOrThrowArgs } from "./args/FindUniqueContestantOrThrowArgs";
import { Contestant } from "../../../models/Contestant";
export declare class FindUniqueContestantOrThrowResolver {
  getContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueContestantOrThrowArgs
  ): Promise<Contestant | null>;
}
