import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSessionArgs } from "./args/FindUniqueSessionArgs";
import { Session } from "../../../models/Session";
export declare class FindUniqueSessionResolver {
  session(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueSessionArgs
  ): Promise<Session | null>;
}
