import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSessionArgs } from "./args/UpdateOneSessionArgs";
import { Session } from "../../../models/Session";
export declare class UpdateOneSessionResolver {
  updateOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneSessionArgs
  ): Promise<Session | null>;
}
