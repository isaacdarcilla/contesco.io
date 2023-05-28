import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneContestantArgs } from "./args/UpdateOneContestantArgs";
import { Contestant } from "../../../models/Contestant";
export declare class UpdateOneContestantResolver {
  updateOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneContestantArgs
  ): Promise<Contestant | null>;
}
