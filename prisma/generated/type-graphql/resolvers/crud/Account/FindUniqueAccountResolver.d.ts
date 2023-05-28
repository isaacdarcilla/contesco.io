import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";
import { Account } from "../../../models/Account";
export declare class FindUniqueAccountResolver {
  account(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueAccountArgs
  ): Promise<Account | null>;
}
