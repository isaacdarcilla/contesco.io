import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSessionOrThrowArgs } from "./args/FindFirstSessionOrThrowArgs";
import { Session } from "../../../models/Session";
export declare class FindFirstSessionOrThrowResolver {
  findFirstSessionOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstSessionOrThrowArgs
  ): Promise<Session | null>;
}
