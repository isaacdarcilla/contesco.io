"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateContestantArgs_1 = require("./args/AggregateContestantArgs");
const CreateManyContestantArgs_1 = require("./args/CreateManyContestantArgs");
const CreateOneContestantArgs_1 = require("./args/CreateOneContestantArgs");
const DeleteManyContestantArgs_1 = require("./args/DeleteManyContestantArgs");
const DeleteOneContestantArgs_1 = require("./args/DeleteOneContestantArgs");
const FindFirstContestantArgs_1 = require("./args/FindFirstContestantArgs");
const FindFirstContestantOrThrowArgs_1 = require("./args/FindFirstContestantOrThrowArgs");
const FindManyContestantArgs_1 = require("./args/FindManyContestantArgs");
const FindUniqueContestantArgs_1 = require("./args/FindUniqueContestantArgs");
const FindUniqueContestantOrThrowArgs_1 = require("./args/FindUniqueContestantOrThrowArgs");
const GroupByContestantArgs_1 = require("./args/GroupByContestantArgs");
const UpdateManyContestantArgs_1 = require("./args/UpdateManyContestantArgs");
const UpdateOneContestantArgs_1 = require("./args/UpdateOneContestantArgs");
const UpsertOneContestantArgs_1 = require("./args/UpsertOneContestantArgs");
const helpers_1 = require("../../../helpers");
const Contestant_1 = require("../../../models/Contestant");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateContestant_1 = require("../../outputs/AggregateContestant");
const ContestantGroupBy_1 = require("../../outputs/ContestantGroupBy");
let ContestantCrudResolver = class ContestantCrudResolver {
  async aggregateContestant(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
  async createManyContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.createMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async createOneContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteManyContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.deleteMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteOneContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.delete({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.findFirst({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstContestantOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.findFirstOrThrow(
      {
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      }
    );
  }
  async contestants(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.findMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async contestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.findUnique({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async getContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).contestant.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async groupByContestant(ctx, info, args) {
    const { _count, _avg, _sum, _min, _max } = (0,
    helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
  async updateManyContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.updateMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async updateOneContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.update({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async upsertOneContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.upsert({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateContestant_1.AggregateContestant, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateContestantArgs_1.AggregateContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "aggregateContestant",
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
      CreateManyContestantArgs_1.CreateManyContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "createManyContestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Contestant_1.Contestant, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneContestantArgs_1.CreateOneContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "createOneContestant",
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
      DeleteManyContestantArgs_1.DeleteManyContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "deleteManyContestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      DeleteOneContestantArgs_1.DeleteOneContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "deleteOneContestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstContestantArgs_1.FindFirstContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "findFirstContestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstContestantOrThrowArgs_1.FindFirstContestantOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "findFirstContestantOrThrow",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [Contestant_1.Contestant], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindManyContestantArgs_1.FindManyContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "contestants",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueContestantArgs_1.FindUniqueContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "contestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueContestantOrThrowArgs_1.FindUniqueContestantOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "getContestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [ContestantGroupBy_1.ContestantGroupBy], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      GroupByContestantArgs_1.GroupByContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "groupByContestant",
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
      UpdateManyContestantArgs_1.UpdateManyContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "updateManyContestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateOneContestantArgs_1.UpdateOneContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "updateOneContestant",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Contestant_1.Contestant, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpsertOneContestantArgs_1.UpsertOneContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantCrudResolver.prototype,
  "upsertOneContestant",
  null
);
ContestantCrudResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  ContestantCrudResolver
);
exports.ContestantCrudResolver = ContestantCrudResolver;
