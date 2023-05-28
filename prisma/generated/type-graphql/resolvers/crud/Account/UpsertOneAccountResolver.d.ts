import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAccountArgs } from "./args/UpsertOneAccountArgs";
import { Account } from "../../../models/Account";
export declare class UpsertOneAccountResolver {
  upsertOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneAccountArgs
  ): Promise<Account>;
}
