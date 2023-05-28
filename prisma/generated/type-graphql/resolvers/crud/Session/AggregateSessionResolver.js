"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSessionArgs_1 = require("./args/AggregateSessionArgs");
const Session_1 = require("../../../models/Session");
const AggregateSession_1 = require("../../outputs/AggregateSession");
const helpers_1 = require("../../../helpers");
let AggregateSessionResolver = class AggregateSessionResolver {
  async aggregateSession(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).session.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateSession_1.AggregateSession, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateSessionArgs_1.AggregateSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AggregateSessionResolver.prototype,
  "aggregateSession",
  null
);
AggregateSessionResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  AggregateSessionResolver
);
exports.AggregateSessionResolver = AggregateSessionResolver;
