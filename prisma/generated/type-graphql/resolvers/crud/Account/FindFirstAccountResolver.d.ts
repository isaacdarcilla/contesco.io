import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";
import { Account } from "../../../models/Account";
export declare class FindFirstAccountResolver {
  findFirstAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstAccountArgs
  ): Promise<Account | null>;
}
