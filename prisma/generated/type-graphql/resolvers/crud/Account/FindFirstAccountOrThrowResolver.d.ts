import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAccountOrThrowArgs } from "./args/FindFirstAccountOrThrowArgs";
import { Account } from "../../../models/Account";
export declare class FindFirstAccountOrThrowResolver {
  findFirstAccountOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstAccountOrThrowArgs
  ): Promise<Account | null>;
}
