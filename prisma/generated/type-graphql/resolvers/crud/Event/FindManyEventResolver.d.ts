import type { GraphQLResolveInfo } from "graphql";
import { FindManyEventArgs } from "./args/FindManyEventArgs";
import { Event } from "../../../models/Event";
export declare class FindManyEventResolver {
  events(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyEventArgs
  ): Promise<Event[]>;
}
