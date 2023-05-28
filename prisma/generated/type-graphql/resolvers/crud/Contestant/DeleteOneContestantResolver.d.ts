import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneContestantArgs } from "./args/DeleteOneContestantArgs";
import { Contestant } from "../../../models/Contestant";
export declare class DeleteOneContestantResolver {
  deleteOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneContestantArgs
  ): Promise<Contestant | null>;
}
