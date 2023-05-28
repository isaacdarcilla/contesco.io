import type { GraphQLResolveInfo } from "graphql";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
export declare class SessionRelationsResolver {
  user(session: Session, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
