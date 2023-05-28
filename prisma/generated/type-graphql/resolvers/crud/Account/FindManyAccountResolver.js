"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyAccountArgs_1 = require("./args/FindManyAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let FindManyAccountResolver = class FindManyAccountResolver {
  async accounts(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.findMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
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
  FindManyAccountResolver.prototype,
  "accounts",
  null
);
FindManyAccountResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Account_1.Account)],
  FindManyAccountResolver
);
exports.FindManyAccountResolver = FindManyAccountResolver;
