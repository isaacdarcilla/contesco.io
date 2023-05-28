"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySessionArgs_1 = require("./args/GroupBySessionArgs");
const Session_1 = require("../../../models/Session");
const SessionGroupBy_1 = require("../../outputs/SessionGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySessionResolver = class GroupBySessionResolver {
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
};
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
  GroupBySessionResolver.prototype,
  "groupBySession",
  null
);
GroupBySessionResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  GroupBySessionResolver
);
exports.GroupBySessionResolver = GroupBySessionResolver;
