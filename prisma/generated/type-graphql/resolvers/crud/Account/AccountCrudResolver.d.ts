import type { GraphQLResolveInfo } from "graphql";
import { AggregateAccountArgs } from "./args/AggregateAccountArgs";
import { CreateManyAccountArgs } from "./args/CreateManyAccountArgs";
import { CreateOneAccountArgs } from "./args/CreateOneAccountArgs";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { DeleteOneAccountArgs } from "./args/DeleteOneAccountArgs";
import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";
import { FindFirstAccountOrThrowArgs } from "./args/FindFirstAccountOrThrowArgs";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";
import { FindUniqueAccountOrThrowArgs } from "./args/FindUniqueAccountOrThrowArgs";
import { GroupByAccountArgs } from "./args/GroupByAccountArgs";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { UpdateOneAccountArgs } from "./args/UpdateOneAccountArgs";
import { UpsertOneAccountArgs } from "./args/UpsertOneAccountArgs";
import { Account } from "../../../models/Account";
import { AccountGroupBy } from "../../outputs/AccountGroupBy";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAccount } from "../../outputs/AggregateAccount";
export declare class AccountCrudResolver {
  aggregateAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateAccountArgs
  ): Promise<AggregateAccount>;
  createManyAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyAccountArgs
  ): Promise<AffectedRowsOutput>;
  createOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneAccountArgs
  ): Promise<Account>;
  deleteManyAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyAccountArgs
  ): Promise<AffectedRowsOutput>;
  deleteOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneAccountArgs
  ): Promise<Account | null>;
  findFirstAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstAccountArgs
  ): Promise<Account | null>;
  findFirstAccountOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstAccountOrThrowArgs
  ): Promise<Account | null>;
  accounts(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyAccountArgs
  ): Promise<Account[]>;
  account(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueAccountArgs
  ): Promise<Account | null>;
  getAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueAccountOrThrowArgs
  ): Promise<Account | null>;
  groupByAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByAccountArgs
  ): Promise<AccountGroupBy[]>;
  updateManyAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyAccountArgs
  ): Promise<AffectedRowsOutput>;
  updateOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneAccountArgs
  ): Promise<Account | null>;
  upsertOneAccount(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneAccountArgs
  ): Promise<Account>;
}
