import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSessionArgs } from "./args/FindFirstSessionArgs";
import { Session } from "../../../models/Session";
export declare class FindFirstSessionResolver {
  findFirstSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstSessionArgs
  ): Promise<Session | null>;
}
