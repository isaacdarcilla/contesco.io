"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSessionArgs_1 = require("./args/AggregateSessionArgs");
const CreateManySessionArgs_1 = require("./args/CreateManySessionArgs");
const CreateOneSessionArgs_1 = require("./args/CreateOneSessionArgs");
const DeleteManySessionArgs_1 = require("./args/DeleteManySessionArgs");
const DeleteOneSessionArgs_1 = require("./args/DeleteOneSessionArgs");
const FindFirstSessionArgs_1 = require("./args/FindFirstSessionArgs");
const FindFirstSessionOrThrowArgs_1 = require("./args/FindFirstSessionOrThrowArgs");
const FindManySessionArgs_1 = require("./args/FindManySessionArgs");
const FindUniqueSessionArgs_1 = require("./args/FindUniqueSessionArgs");
const FindUniqueSessionOrThrowArgs_1 = require("./args/FindUniqueSessionOrThrowArgs");
const GroupBySessionArgs_1 = require("./args/GroupBySessionArgs");
const UpdateManySessionArgs_1 = require("./args/UpdateManySessionArgs");
const UpdateOneSessionArgs_1 = require("./args/UpdateOneSessionArgs");
const UpsertOneSessionArgs_1 = require("./args/UpsertOneSessionArgs");
const helpers_1 = require("../../../helpers");
const Session_1 = require("../../../models/Session");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSession_1 = require("../../outputs/AggregateSession");
const SessionGroupBy_1 = require("../../outputs/SessionGroupBy");
let SessionCrudResolver = class SessionCrudResolver {
  async aggregateSession(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).session.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
  async createManySession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.createMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async createOneSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteManySession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.deleteMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteOneSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.delete({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findFirst({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstSessionOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findFirstOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async sessions(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async session(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findUnique({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async getSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async groupBySession(ctx, info, args) {
    const { _count, _avg, _sum, _min, _max } = (0,
    helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
  async updateManySession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.updateMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async updateOneSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.update({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async upsertOneSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.upsert({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateSession_1.AggregateSession, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateSessionArgs_1.AggregateSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "aggregateSession",
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
      CreateManySessionArgs_1.CreateManySessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "createManySession",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Session_1.Session, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneSessionArgs_1.CreateOneSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "createOneSession",
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
      DeleteManySessionArgs_1.DeleteManySessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "deleteManySession",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Session_1.Session, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      DeleteOneSessionArgs_1.DeleteOneSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "deleteOneSession",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Session_1.Session, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstSessionArgs_1.FindFirstSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "findFirstSession",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Session_1.Session, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstSessionOrThrowArgs_1.FindFirstSessionOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "findFirstSessionOrThrow",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [Session_1.Session], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindManySessionArgs_1.FindManySessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "sessions",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Session_1.Session, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueSessionArgs_1.FindUniqueSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "session",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Session_1.Session, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueSessionOrThrowArgs_1.FindUniqueSessionOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "getSession",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [SessionGroupBy_1.SessionGroupBy], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      GroupBySessionArgs_1.GroupBySessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "groupBySession",
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
      UpdateManySessionArgs_1.UpdateManySessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "updateManySession",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Session_1.Session, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateOneSessionArgs_1.UpdateOneSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "updateOneSession",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Session_1.Session, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpsertOneSessionArgs_1.UpsertOneSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionCrudResolver.prototype,
  "upsertOneSession",
  null
);
SessionCrudResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  SessionCrudResolver
);
exports.SessionCrudResolver = SessionCrudResolver;
