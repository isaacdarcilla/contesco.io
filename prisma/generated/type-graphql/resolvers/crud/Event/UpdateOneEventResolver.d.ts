import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEventArgs } from "./args/UpdateOneEventArgs";
import { Event } from "../../../models/Event";
export declare class UpdateOneEventResolver {
  updateOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneEventArgs
  ): Promise<Event | null>;
}
