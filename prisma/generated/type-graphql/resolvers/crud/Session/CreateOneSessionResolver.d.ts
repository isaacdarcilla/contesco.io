import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSessionArgs } from "./args/CreateOneSessionArgs";
import { Session } from "../../../models/Session";
export declare class CreateOneSessionResolver {
  createOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneSessionArgs
  ): Promise<Session>;
}
