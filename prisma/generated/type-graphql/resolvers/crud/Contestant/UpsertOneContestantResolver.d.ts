import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneContestantArgs } from "./args/UpsertOneContestantArgs";
import { Contestant } from "../../../models/Contestant";
export declare class UpsertOneContestantResolver {
  upsertOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneContestantArgs
  ): Promise<Contestant>;
}
