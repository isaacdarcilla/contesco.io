import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAccountArgs } from "./args/UpdateOneAccountArgs";
import { Account } from "../../../models/Account";
export declare class UpdateOneAccountResolver {
  updateOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneAccountArgs
  ): Promise<Account | null>;
}
