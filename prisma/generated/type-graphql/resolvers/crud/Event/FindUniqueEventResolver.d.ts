import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEventArgs } from "./args/FindUniqueEventArgs";
import { Event } from "../../../models/Event";
export declare class FindUniqueEventResolver {
  event(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueEventArgs
  ): Promise<Event | null>;
}
