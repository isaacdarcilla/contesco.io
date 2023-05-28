import type { GraphQLResolveInfo } from "graphql";
import { Contestant } from "../../../models/Contestant";
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";
export declare class ContestantRelationsResolver {
  event(
    contestant: Contestant,
    ctx: any,
    info: GraphQLResolveInfo
  ): Promise<Event>;
  user(
    contestant: Contestant,
    ctx: any,
    info: GraphQLResolveInfo
  ): Promise<User>;
}
