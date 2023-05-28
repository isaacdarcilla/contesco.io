import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Contestant } from "../../../models/Contestant";
import { Event } from "../../../models/Event";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserContestantArgs } from "./args/UserContestantArgs";
import { UserEventsArgs } from "./args/UserEventsArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
  accounts(
    user: User,
    ctx: any,
    info: GraphQLResolveInfo,
    args: UserAccountsArgs
  ): Promise<Account[]>;
  sessions(
    user: User,
    ctx: any,
    info: GraphQLResolveInfo,
    args: UserSessionsArgs
  ): Promise<Session[]>;
  events(
    user: User,
    ctx: any,
    info: GraphQLResolveInfo,
    args: UserEventsArgs
  ): Promise<Event[]>;
  Contestant(
    user: User,
    ctx: any,
    info: GraphQLResolveInfo,
    args: UserContestantArgs
  ): Promise<Contestant[]>;
}
