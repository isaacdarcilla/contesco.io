import type { GraphQLResolveInfo } from "graphql";
import { FindManySessionArgs } from "./args/FindManySessionArgs";
import { Session } from "../../../models/Session";
export declare class FindManySessionResolver {
  sessions(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManySessionArgs
  ): Promise<Session[]>;
}
