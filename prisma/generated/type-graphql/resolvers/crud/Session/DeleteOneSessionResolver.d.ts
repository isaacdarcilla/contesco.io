import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSessionArgs } from "./args/DeleteOneSessionArgs";
import { Session } from "../../../models/Session";
export declare class DeleteOneSessionResolver {
  deleteOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneSessionArgs
  ): Promise<Session | null>;
}
