"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByContestantArgs_1 = require("./args/GroupByContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const ContestantGroupBy_1 = require("../../outputs/ContestantGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByContestantResolver = class GroupByContestantResolver {
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
};
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
  GroupByContestantResolver.prototype,
  "groupByContestant",
  null
);
GroupByContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  GroupByContestantResolver
);
exports.GroupByContestantResolver = GroupByContestantResolver;
