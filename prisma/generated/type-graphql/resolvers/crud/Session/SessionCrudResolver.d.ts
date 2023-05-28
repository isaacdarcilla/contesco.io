import type { GraphQLResolveInfo } from "graphql";
import { AggregateSessionArgs } from "./args/AggregateSessionArgs";
import { CreateManySessionArgs } from "./args/CreateManySessionArgs";
import { CreateOneSessionArgs } from "./args/CreateOneSessionArgs";
import { DeleteManySessionArgs } from "./args/DeleteManySessionArgs";
import { DeleteOneSessionArgs } from "./args/DeleteOneSessionArgs";
import { FindFirstSessionArgs } from "./args/FindFirstSessionArgs";
import { FindFirstSessionOrThrowArgs } from "./args/FindFirstSessionOrThrowArgs";
import { FindManySessionArgs } from "./args/FindManySessionArgs";
import { FindUniqueSessionArgs } from "./args/FindUniqueSessionArgs";
import { FindUniqueSessionOrThrowArgs } from "./args/FindUniqueSessionOrThrowArgs";
import { GroupBySessionArgs } from "./args/GroupBySessionArgs";
import { UpdateManySessionArgs } from "./args/UpdateManySessionArgs";
import { UpdateOneSessionArgs } from "./args/UpdateOneSessionArgs";
import { UpsertOneSessionArgs } from "./args/UpsertOneSessionArgs";
import { Session } from "../../../models/Session";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSession } from "../../outputs/AggregateSession";
import { SessionGroupBy } from "../../outputs/SessionGroupBy";
export declare class SessionCrudResolver {
  aggregateSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateSessionArgs
  ): Promise<AggregateSession>;
  createManySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManySessionArgs
  ): Promise<AffectedRowsOutput>;
  createOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneSessionArgs
  ): Promise<Session>;
  deleteManySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManySessionArgs
  ): Promise<AffectedRowsOutput>;
  deleteOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneSessionArgs
  ): Promise<Session | null>;
  findFirstSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstSessionArgs
  ): Promise<Session | null>;
  findFirstSessionOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstSessionOrThrowArgs
  ): Promise<Session | null>;
  sessions(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManySessionArgs
  ): Promise<Session[]>;
  session(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueSessionArgs
  ): Promise<Session | null>;
  getSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueSessionOrThrowArgs
  ): Promise<Session | null>;
  groupBySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupBySessionArgs
  ): Promise<SessionGroupBy[]>;
  updateManySession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManySessionArgs
  ): Promise<AffectedRowsOutput>;
  updateOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneSessionArgs
  ): Promise<Session | null>;
  upsertOneSession(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneSessionArgs
  ): Promise<Session>;
}
