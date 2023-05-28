"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByVerificationTokenArgs_1 = require("./args/GroupByVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const VerificationTokenGroupBy_1 = require("../../outputs/VerificationTokenGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByVerificationTokenResolver = class GroupByVerificationTokenResolver {
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
};
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
  GroupByVerificationTokenResolver.prototype,
  "groupByVerificationToken",
  null
);
GroupByVerificationTokenResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  GroupByVerificationTokenResolver
);
exports.GroupByVerificationTokenResolver = GroupByVerificationTokenResolver;
