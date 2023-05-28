import type { GraphQLResolveInfo } from "graphql";
import { CreateOneContestantArgs } from "./args/CreateOneContestantArgs";
import { Contestant } from "../../../models/Contestant";
export declare class CreateOneContestantResolver {
  createOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneContestantArgs
  ): Promise<Contestant>;
}
