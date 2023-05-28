import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSessionOrThrowArgs } from "./args/FindUniqueSessionOrThrowArgs";
import { Session } from "../../../models/Session";
export declare class FindUniqueSessionOrThrowResolver {
  getSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueSessionOrThrowArgs
  ): Promise<Session | null>;
}
