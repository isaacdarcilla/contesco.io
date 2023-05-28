import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEventArgs } from "./args/UpsertOneEventArgs";
import { Event } from "../../../models/Event";
export declare class UpsertOneEventResolver {
  upsertOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneEventArgs
  ): Promise<Event>;
}
