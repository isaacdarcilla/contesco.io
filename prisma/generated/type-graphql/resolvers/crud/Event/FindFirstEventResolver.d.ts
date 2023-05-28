import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEventArgs } from "./args/FindFirstEventArgs";
import { Event } from "../../../models/Event";
export declare class FindFirstEventResolver {
  findFirstEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstEventArgs
  ): Promise<Event | null>;
}
