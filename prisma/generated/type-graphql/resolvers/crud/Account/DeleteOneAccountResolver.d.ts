import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAccountArgs } from "./args/DeleteOneAccountArgs";
import { Account } from "../../../models/Account";
export declare class DeleteOneAccountResolver {
  deleteOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneAccountArgs
  ): Promise<Account | null>;
}
