import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { User } from "../../../models/User";
export declare class AccountRelationsResolver {
  user(account: Account, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
