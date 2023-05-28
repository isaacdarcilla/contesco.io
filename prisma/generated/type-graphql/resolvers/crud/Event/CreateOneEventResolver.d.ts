import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEventArgs } from "./args/CreateOneEventArgs";
import { Event } from "../../../models/Event";
export declare class CreateOneEventResolver {
  createOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneEventArgs
  ): Promise<Event>;
}
