import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEventOrThrowArgs } from "./args/FindFirstEventOrThrowArgs";
import { Event } from "../../../models/Event";
export declare class FindFirstEventOrThrowResolver {
  findFirstEventOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstEventOrThrowArgs
  ): Promise<Event | null>;
}
