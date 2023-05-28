import type { GraphQLResolveInfo } from "graphql";
import { Contestant } from "../../../models/Contestant";
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";
import { EventContestantsArgs } from "./args/EventContestantsArgs";
export declare class EventRelationsResolver {
  contestants(
    event: Event,
    ctx: any,
    info: GraphQLResolveInfo,
    args: EventContestantsArgs
  ): Promise<Contestant[]>;
  user(event: Event, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
