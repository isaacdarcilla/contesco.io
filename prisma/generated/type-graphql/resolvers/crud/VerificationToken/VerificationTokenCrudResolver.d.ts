import type { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationTokenArgs } from "./args/AggregateVerificationTokenArgs";
import { CreateManyVerificationTokenArgs } from "./args/CreateManyVerificationTokenArgs";
import { CreateOneVerificationTokenArgs } from "./args/CreateOneVerificationTokenArgs";
import { DeleteManyVerificationTokenArgs } from "./args/DeleteManyVerificationTokenArgs";
import { DeleteOneVerificationTokenArgs } from "./args/DeleteOneVerificationTokenArgs";
import { FindFirstVerificationTokenArgs } from "./args/FindFirstVerificationTokenArgs";
import { FindFirstVerificationTokenOrThrowArgs } from "./args/FindFirstVerificationTokenOrThrowArgs";
import { FindManyVerificationTokenArgs } from "./args/FindManyVerificationTokenArgs";
import { FindUniqueVerificationTokenArgs } from "./args/FindUniqueVerificationTokenArgs";
import { FindUniqueVerificationTokenOrThrowArgs } from "./args/FindUniqueVerificationTokenOrThrowArgs";
import { GroupByVerificationTokenArgs } from "./args/GroupByVerificationTokenArgs";
import { UpdateManyVerificationTokenArgs } from "./args/UpdateManyVerificationTokenArgs";
import { UpdateOneVerificationTokenArgs } from "./args/UpdateOneVerificationTokenArgs";
import { UpsertOneVerificationTokenArgs } from "./args/UpsertOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVerificationToken } from "../../outputs/AggregateVerificationToken";
import { VerificationTokenGroupBy } from "../../outputs/VerificationTokenGroupBy";
export declare class VerificationTokenCrudResolver {
  aggregateVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateVerificationTokenArgs
  ): Promise<AggregateVerificationToken>;
  createManyVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyVerificationTokenArgs
  ): Promise<AffectedRowsOutput>;
  createOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneVerificationTokenArgs
  ): Promise<VerificationToken>;
  deleteManyVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyVerificationTokenArgs
  ): Promise<AffectedRowsOutput>;
  deleteOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneVerificationTokenArgs
  ): Promise<VerificationToken | null>;
  findFirstVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstVerificationTokenArgs
  ): Promise<VerificationToken | null>;
  findFirstVerificationTokenOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstVerificationTokenOrThrowArgs
  ): Promise<VerificationToken | null>;
  verificationTokens(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyVerificationTokenArgs
  ): Promise<VerificationToken[]>;
  verificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueVerificationTokenArgs
  ): Promise<VerificationToken | null>;
  getVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueVerificationTokenOrThrowArgs
  ): Promise<VerificationToken | null>;
  groupByVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByVerificationTokenArgs
  ): Promise<VerificationTokenGroupBy[]>;
  updateManyVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyVerificationTokenArgs
  ): Promise<AffectedRowsOutput>;
  updateOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneVerificationTokenArgs
  ): Promise<VerificationToken | null>;
  upsertOneVerificationToken(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneVerificationTokenArgs
  ): Promise<VerificationToken>;
}
