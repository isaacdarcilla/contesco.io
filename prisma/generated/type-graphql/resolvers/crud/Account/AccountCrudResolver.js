"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAccountArgs_1 = require("./args/AggregateAccountArgs");
const CreateManyAccountArgs_1 = require("./args/CreateManyAccountArgs");
const CreateOneAccountArgs_1 = require("./args/CreateOneAccountArgs");
const DeleteManyAccountArgs_1 = require("./args/DeleteManyAccountArgs");
const DeleteOneAccountArgs_1 = require("./args/DeleteOneAccountArgs");
const FindFirstAccountArgs_1 = require("./args/FindFirstAccountArgs");
const FindFirstAccountOrThrowArgs_1 = require("./args/FindFirstAccountOrThrowArgs");
const FindManyAccountArgs_1 = require("./args/FindManyAccountArgs");
const FindUniqueAccountArgs_1 = require("./args/FindUniqueAccountArgs");
const FindUniqueAccountOrThrowArgs_1 = require("./args/FindUniqueAccountOrThrowArgs");
const GroupByAccountArgs_1 = require("./args/GroupByAccountArgs");
const UpdateManyAccountArgs_1 = require("./args/UpdateManyAccountArgs");
const UpdateOneAccountArgs_1 = require("./args/UpdateOneAccountArgs");
const UpsertOneAccountArgs_1 = require("./args/UpsertOneAccountArgs");
const helpers_1 = require("../../../helpers");
const Account_1 = require("../../../models/Account");
const AccountGroupBy_1 = require("../../outputs/AccountGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAccount_1 = require("../../outputs/AggregateAccount");
let AccountCrudResolver = class AccountCrudResolver {
  async aggregateAccount(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).account.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
  async createManyAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.createMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async createOneAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteManyAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.deleteMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async deleteOneAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.delete({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.findFirst({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async findFirstAccountOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.findFirstOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async accounts(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.findMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async account(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.findUnique({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async getAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async groupByAccount(ctx, info, args) {
    const { _count, _avg, _sum, _min, _max } = (0,
    helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
  async updateManyAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.updateMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async updateOneAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.update({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
  async upsertOneAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.upsert({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateAccount_1.AggregateAccount, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateAccountArgs_1.AggregateAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "aggregateAccount",
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
      CreateManyAccountArgs_1.CreateManyAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "createManyAccount",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Account_1.Account, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneAccountArgs_1.CreateOneAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "createOneAccount",
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
      DeleteManyAccountArgs_1.DeleteManyAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "deleteManyAccount",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Account_1.Account, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      DeleteOneAccountArgs_1.DeleteOneAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "deleteOneAccount",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Account_1.Account, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstAccountArgs_1.FindFirstAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "findFirstAccount",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Account_1.Account, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstAccountOrThrowArgs_1.FindFirstAccountOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "findFirstAccountOrThrow",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [Account_1.Account], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindManyAccountArgs_1.FindManyAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "accounts",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Account_1.Account, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueAccountArgs_1.FindUniqueAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "account",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Account_1.Account, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueAccountOrThrowArgs_1.FindUniqueAccountOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "getAccount",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => [AccountGroupBy_1.AccountGroupBy], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      GroupByAccountArgs_1.GroupByAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "groupByAccount",
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
      UpdateManyAccountArgs_1.UpdateManyAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "updateManyAccount",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Account_1.Account, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateOneAccountArgs_1.UpdateOneAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "updateOneAccount",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Account_1.Account, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpsertOneAccountArgs_1.UpsertOneAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountCrudResolver.prototype,
  "upsertOneAccount",
  null
);
AccountCrudResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Account_1.Account)],
  AccountCrudResolver
);
exports.AccountCrudResolver = AccountCrudResolver;
