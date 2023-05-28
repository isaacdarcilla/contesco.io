import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSessionArgs } from "./args/UpsertOneSessionArgs";
import { Session } from "../../../models/Session";
export declare class UpsertOneSessionResolver {
  upsertOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneSessionArgs
  ): Promise<Session>;
}
