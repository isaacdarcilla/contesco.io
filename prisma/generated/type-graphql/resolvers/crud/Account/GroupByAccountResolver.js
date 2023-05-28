"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAccountArgs_1 = require("./args/GroupByAccountArgs");
const Account_1 = require("../../../models/Account");
const AccountGroupBy_1 = require("../../outputs/AccountGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAccountResolver = class GroupByAccountResolver {
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
};
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
  GroupByAccountResolver.prototype,
  "groupByAccount",
  null
);
GroupByAccountResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Account_1.Account)],
  GroupByAccountResolver
);
exports.GroupByAccountResolver = GroupByAccountResolver;
