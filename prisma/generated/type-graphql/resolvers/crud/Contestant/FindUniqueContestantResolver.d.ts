import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueContestantArgs } from "./args/FindUniqueContestantArgs";
import { Contestant } from "../../../models/Contestant";
export declare class FindUniqueContestantResolver {
  contestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueContestantArgs
  ): Promise<Contestant | null>;
}
