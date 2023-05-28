import type { GraphQLResolveInfo } from "graphql";
import { AggregateEventArgs } from "./args/AggregateEventArgs";
import { CreateManyEventArgs } from "./args/CreateManyEventArgs";
import { CreateOneEventArgs } from "./args/CreateOneEventArgs";
import { DeleteManyEventArgs } from "./args/DeleteManyEventArgs";
import { DeleteOneEventArgs } from "./args/DeleteOneEventArgs";
import { FindFirstEventArgs } from "./args/FindFirstEventArgs";
import { FindFirstEventOrThrowArgs } from "./args/FindFirstEventOrThrowArgs";
import { FindManyEventArgs } from "./args/FindManyEventArgs";
import { FindUniqueEventArgs } from "./args/FindUniqueEventArgs";
import { FindUniqueEventOrThrowArgs } from "./args/FindUniqueEventOrThrowArgs";
import { GroupByEventArgs } from "./args/GroupByEventArgs";
import { UpdateManyEventArgs } from "./args/UpdateManyEventArgs";
import { UpdateOneEventArgs } from "./args/UpdateOneEventArgs";
import { UpsertOneEventArgs } from "./args/UpsertOneEventArgs";
import { Event } from "../../../models/Event";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEvent } from "../../outputs/AggregateEvent";
import { EventGroupBy } from "../../outputs/EventGroupBy";
export declare class EventCrudResolver {
  aggregateEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: AggregateEventArgs
  ): Promise<AggregateEvent>;
  createManyEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateManyEventArgs
  ): Promise<AffectedRowsOutput>;
  createOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: CreateOneEventArgs
  ): Promise<Event>;
  deleteManyEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteManyEventArgs
  ): Promise<AffectedRowsOutput>;
  deleteOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: DeleteOneEventArgs
  ): Promise<Event | null>;
  findFirstEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstEventArgs
  ): Promise<Event | null>;
  findFirstEventOrThrow(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindFirstEventOrThrowArgs
  ): Promise<Event | null>;
  events(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindManyEventArgs
  ): Promise<Event[]>;
  event(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueEventArgs
  ): Promise<Event | null>;
  getEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: FindUniqueEventOrThrowArgs
  ): Promise<Event | null>;
  groupByEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: GroupByEventArgs
  ): Promise<EventGroupBy[]>;
  updateManyEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateManyEventArgs
  ): Promise<AffectedRowsOutput>;
  updateOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpdateOneEventArgs
  ): Promise<Event | null>;
  upsertOneEvent(
    ctx: any,
    info: GraphQLResolveInfo,
    args: UpsertOneEventArgs
  ): Promise<Event>;
}
