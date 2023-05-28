import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAccountOrThrowArgs } from "./args/FindUniqueAccountOrThrowArgs";
import { Account } from "../../../models/Account";
export declare class FindUniqueAccountOrThrowResolver {
  getAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueAccountOrThrowArgs
  ): Promise<Account | null>;
}
