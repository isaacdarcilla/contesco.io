import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAccountArgs } from "./args/CreateOneAccountArgs";
import { Account } from "../../../models/Account";
export declare class CreateOneAccountResolver {
  createOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneAccountArgs
  ): Promise<Account>;
}
