"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneEventArgs_1 = require("./args/UpsertOneEventArgs");
const Event_1 = require("../../../models/Event");
const helpers_1 = require("../../../helpers");
let UpsertOneEventResolver = class UpsertOneEventResolver {
  async upsertOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.upsert({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Event_1.Event, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpsertOneEventArgs_1.UpsertOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UpsertOneEventResolver.prototype,
  "upsertOneEvent",
  null
);
UpsertOneEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  UpsertOneEventResolver
);
exports.UpsertOneEventResolver = UpsertOneEventResolver;
