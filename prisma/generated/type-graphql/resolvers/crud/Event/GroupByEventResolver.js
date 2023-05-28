"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByEventArgs_1 = require("./args/GroupByEventArgs");
const Event_1 = require("../../../models/Event");
const EventGroupBy_1 = require("../../outputs/EventGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEventResolver = class GroupByEventResolver {
  async groupByEvent(ctx, info, args) {
    const { _count, _avg, _sum, _min, _max } = (0,
    helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.groupBy({
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
    TypeGraphQL.Query((_returns) => [EventGroupBy_1.EventGroupBy], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      GroupByEventArgs_1.GroupByEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  GroupByEventResolver.prototype,
  "groupByEvent",
  null
);
GroupByEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  GroupByEventResolver
);
exports.GroupByEventResolver = GroupByEventResolver;
