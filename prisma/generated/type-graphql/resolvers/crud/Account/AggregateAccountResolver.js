"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAccountArgs_1 = require("./args/AggregateAccountArgs");
const Account_1 = require("../../../models/Account");
const AggregateAccount_1 = require("../../outputs/AggregateAccount");
const helpers_1 = require("../../../helpers");
let AggregateAccountResolver = class AggregateAccountResolver {
  async aggregateAccount(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).account.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
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
  AggregateAccountResolver.prototype,
  "aggregateAccount",
  null
);
AggregateAccountResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Account_1.Account)],
  AggregateAccountResolver
);
exports.AggregateAccountResolver = AggregateAccountResolver;
