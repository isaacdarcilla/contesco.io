import type { GraphQLResolveInfo } from "graphql";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { Account } from "../../../models/Account";
export declare class FindManyAccountResolver {
  accounts(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyAccountArgs
  ): Promise<Account[]>;
}
