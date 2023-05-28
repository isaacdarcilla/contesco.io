"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEventArgs_1 = require("./args/AggregateEventArgs");
const CreateManyEventArgs_1 = require("./args/CreateManyEventArgs");
const CreateOneEventArgs_1 = require("./args/CreateOneEventArgs");
const DeleteManyEventArgs_1 = require("./args/DeleteManyEventArgs");
const DeleteOneEventArgs_1 = require("./args/DeleteOneEventArgs");
const FindFirstEventArgs_1 = require("./args/FindFirstEventArgs");
const FindFirstEventOrThrowArgs_1 = require("./args/FindFirstEventOrThrowArgs");
const FindManyEventArgs_1 = require("./args/FindManyEventArgs");
const FindUniqueEventArgs_1 = require("./args/FindUniqueEventArgs");
const FindUniqueEventOrThrowArgs_1 = require("./args/FindUniqueEventOrThrowArgs");
const GroupByEventArgs_1 = require("./args/GroupByEventArgs");
const UpdateManyEventArgs_1 = require("./args/UpdateManyEventArgs");
const UpdateOneEventArgs_1 = require("./args/UpdateOneEventArgs");
const UpsertOneEventArgs_1 = require("./args/UpsertOneEventArgs");
const helpers_1 = require("../../../helpers");
const Event_1 = require("../../../models/Event");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEvent_1 = require("../../outputs/AggregateEvent");
const EventGroupBy_1 = require("../../outputs/EventGroupBy");
let EventCrudResolver = class EventCrudResolver {
  async aggregateEvent(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).event.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
  async createManyEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.createMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async createOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteManyEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.deleteMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.delete({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.findFirst({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstEventOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.findFirstOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async events(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.findMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async event(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.findUnique({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async getEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async groupByEvent(ctx, info, args) {
    const { _count, _avg, _sum, _min, _max } = (0,
    helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
  async updateManyEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.updateMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async updateOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.update({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async upsertOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.upsert({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateEvent_1.AggregateEvent, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateEventArgs_1.AggregateEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "aggregateEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation(
      (_returns) => AffectedRowsOutput_1.AffectedRowsOutput,
      {
        nullable: false,
      }
    ),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateManyEventArgs_1.CreateManyEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "createManyEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Event_1.Event, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneEventArgs_1.CreateOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "createOneEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation(
      (_returns) => AffectedRowsOutput_1.AffectedRowsOutput,
      {
        nullable: false,
      }
    ),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      DeleteManyEventArgs_1.DeleteManyEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "deleteManyEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      DeleteOneEventArgs_1.DeleteOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "deleteOneEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstEventArgs_1.FindFirstEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "findFirstEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstEventOrThrowArgs_1.FindFirstEventOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "findFirstEventOrThrow",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [Event_1.Event], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindManyEventArgs_1.FindManyEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "events",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueEventArgs_1.FindUniqueEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "event",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueEventOrThrowArgs_1.FindUniqueEventOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "getEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [EventGroupBy_1.EventGroupBy], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      GroupByEventArgs_1.GroupByEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "groupByEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation(
      (_returns) => AffectedRowsOutput_1.AffectedRowsOutput,
      {
        nullable: false,
      }
    ),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateManyEventArgs_1.UpdateManyEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "updateManyEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateOneEventArgs_1.UpdateOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "updateOneEvent",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Event_1.Event, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpsertOneEventArgs_1.UpsertOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventCrudResolver.prototype,
  "upsertOneEvent",
  null
);
EventCrudResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  EventCrudResolver
);
exports.EventCrudResolver = EventCrudResolver;
