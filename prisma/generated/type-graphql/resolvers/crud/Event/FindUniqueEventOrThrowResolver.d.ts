import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEventOrThrowArgs } from "./args/FindUniqueEventOrThrowArgs";
import { Event } from "../../../models/Event";
export declare class FindUniqueEventOrThrowResolver {
  getEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueEventOrThrowArgs
  ): Promise<Event | null>;
}
