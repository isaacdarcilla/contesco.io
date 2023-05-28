"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEventArgs_1 = require("./args/AggregateEventArgs");
const Event_1 = require("../../../models/Event");
const AggregateEvent_1 = require("../../outputs/AggregateEvent");
const helpers_1 = require("../../../helpers");
let AggregateEventResolver = class AggregateEventResolver {
  async aggregateEvent(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).event.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateEvent_1.AggregateEvent, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateEventArgs_1.AggregateEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AggregateEventResolver.prototype,
  "aggregateEvent",
  null
);
AggregateEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  AggregateEventResolver
);
exports.AggregateEventResolver = AggregateEventResolver;
