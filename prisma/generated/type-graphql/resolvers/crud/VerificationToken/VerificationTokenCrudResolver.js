"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateVerificationTokenArgs_1 = require("./args/AggregateVerificationTokenArgs");
const CreateManyVerificationTokenArgs_1 = require("./args/CreateManyVerificationTokenArgs");
const CreateOneVerificationTokenArgs_1 = require("./args/CreateOneVerificationTokenArgs");
const DeleteManyVerificationTokenArgs_1 = require("./args/DeleteManyVerificationTokenArgs");
const DeleteOneVerificationTokenArgs_1 = require("./args/DeleteOneVerificationTokenArgs");
const FindFirstVerificationTokenArgs_1 = require("./args/FindFirstVerificationTokenArgs");
const FindFirstVerificationTokenOrThrowArgs_1 = require("./args/FindFirstVerificationTokenOrThrowArgs");
const FindManyVerificationTokenArgs_1 = require("./args/FindManyVerificationTokenArgs");
const FindUniqueVerificationTokenArgs_1 = require("./args/FindUniqueVerificationTokenArgs");
const FindUniqueVerificationTokenOrThrowArgs_1 = require("./args/FindUniqueVerificationTokenOrThrowArgs");
const GroupByVerificationTokenArgs_1 = require("./args/GroupByVerificationTokenArgs");
const UpdateManyVerificationTokenArgs_1 = require("./args/UpdateManyVerificationTokenArgs");
const UpdateOneVerificationTokenArgs_1 = require("./args/UpdateOneVerificationTokenArgs");
const UpsertOneVerificationTokenArgs_1 = require("./args/UpsertOneVerificationTokenArgs");
const helpers_1 = require("../../../helpers");
const VerificationToken_1 = require("../../../models/VerificationToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVerificationToken_1 = require("../../outputs/AggregateVerificationToken");
const VerificationTokenGroupBy_1 = require("../../outputs/VerificationTokenGroupBy");
let VerificationTokenCrudResolver = class VerificationTokenCrudResolver {
  async aggregateVerificationToken(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.aggregate(
      {
        ...args,
        ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
      }
    );
  }
  async createManyVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.createMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async createOneVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteManyVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.deleteMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteOneVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.delete({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.findFirst(
      {
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      }
    );
  }
  async findFirstVerificationTokenOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.findFirstOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async verificationTokens(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.findMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async verificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.findUnique({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async getVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async groupByVerificationToken(ctx, info, args) {
    const { _count, _avg, _sum, _min, _max } = (0,
    helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
  async updateManyVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.updateMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async updateOneVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.update({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async upsertOneVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.upsert({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query(
      (_returns) => AggregateVerificationToken_1.AggregateVerificationToken,
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
      AggregateVerificationTokenArgs_1.AggregateVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "aggregateVerificationToken",
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
      CreateManyVerificationTokenArgs_1.CreateManyVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "createManyVerificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => VerificationToken_1.VerificationToken, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneVerificationTokenArgs_1.CreateOneVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "createOneVerificationToken",
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
      DeleteManyVerificationTokenArgs_1.DeleteManyVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "deleteManyVerificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      DeleteOneVerificationTokenArgs_1.DeleteOneVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "deleteOneVerificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstVerificationTokenArgs_1.FindFirstVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "findFirstVerificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstVerificationTokenOrThrowArgs_1.FindFirstVerificationTokenOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "findFirstVerificationTokenOrThrow",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [VerificationToken_1.VerificationToken], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindManyVerificationTokenArgs_1.FindManyVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "verificationTokens",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueVerificationTokenArgs_1.FindUniqueVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "verificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueVerificationTokenOrThrowArgs_1.FindUniqueVerificationTokenOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "getVerificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query(
      (_returns) => [VerificationTokenGroupBy_1.VerificationTokenGroupBy],
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
      GroupByVerificationTokenArgs_1.GroupByVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "groupByVerificationToken",
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
      UpdateManyVerificationTokenArgs_1.UpdateManyVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "updateManyVerificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateOneVerificationTokenArgs_1.UpdateOneVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "updateOneVerificationToken",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => VerificationToken_1.VerificationToken, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpsertOneVerificationTokenArgs_1.UpsertOneVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  VerificationTokenCrudResolver.prototype,
  "upsertOneVerificationToken",
  null
);
VerificationTokenCrudResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  VerificationTokenCrudResolver
);
exports.VerificationTokenCrudResolver = VerificationTokenCrudResolver;
