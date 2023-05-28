import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestantArgs } from "./args/AggregateContestantArgs";
import { CreateManyContestantArgs } from "./args/CreateManyContestantArgs";
import { CreateOneContestantArgs } from "./args/CreateOneContestantArgs";
import { DeleteManyContestantArgs } from "./args/DeleteManyContestantArgs";
import { DeleteOneContestantArgs } from "./args/DeleteOneContestantArgs";
import { FindFirstContestantArgs } from "./args/FindFirstContestantArgs";
import { FindFirstContestantOrThrowArgs } from "./args/FindFirstContestantOrThrowArgs";
import { FindManyContestantArgs } from "./args/FindManyContestantArgs";
import { FindUniqueContestantArgs } from "./args/FindUniqueContestantArgs";
import { FindUniqueContestantOrThrowArgs } from "./args/FindUniqueContestantOrThrowArgs";
import { GroupByContestantArgs } from "./args/GroupByContestantArgs";
import { UpdateManyContestantArgs } from "./args/UpdateManyContestantArgs";
import { UpdateOneContestantArgs } from "./args/UpdateOneContestantArgs";
import { UpsertOneContestantArgs } from "./args/UpsertOneContestantArgs";
import { Contestant } from "../../../models/Contestant";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateContestant } from "../../outputs/AggregateContestant";
import { ContestantGroupBy } from "../../outputs/ContestantGroupBy";
export declare class ContestantCrudResolver {
  aggregateContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateContestantArgs
  ): Promise<AggregateContestant>;
  createManyContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyContestantArgs
  ): Promise<AffectedRowsOutput>;
  createOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneContestantArgs
  ): Promise<Contestant>;
  deleteManyContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyContestantArgs
  ): Promise<AffectedRowsOutput>;
  deleteOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneContestantArgs
  ): Promise<Contestant | null>;
  findFirstContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstContestantArgs
  ): Promise<Contestant | null>;
  findFirstContestantOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstContestantOrThrowArgs
  ): Promise<Contestant | null>;
  contestants(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyContestantArgs
  ): Promise<Contestant[]>;
  contestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueContestantArgs
  ): Promise<Contestant | null>;
  getContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueContestantOrThrowArgs
  ): Promise<Contestant | null>;
  groupByContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByContestantArgs
  ): Promise<ContestantGroupBy[]>;
  updateManyContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyContestantArgs
  ): Promise<AffectedRowsOutput>;
  updateOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneContestantArgs
  ): Promise<Contestant | null>;
  upsertOneContestant(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneContestantArgs
  ): Promise<Contestant>;
}
