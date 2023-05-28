import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEventArgs } from "./args/DeleteOneEventArgs";
import { Event } from "../../../models/Event";
export declare class DeleteOneEventResolver {
  deleteOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneEventArgs
  ): Promise<Event | null>;
}
