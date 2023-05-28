"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEventArgs_1 = require("./args/FindUniqueEventArgs");
const Event_1 = require("../../../models/Event");
const helpers_1 = require("../../../helpers");
let FindUniqueEventResolver = class FindUniqueEventResolver {
  async event(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.findUnique({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueEventArgs_1.FindUniqueEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindUniqueEventResolver.prototype,
  "event",
  null
);
FindUniqueEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  FindUniqueEventResolver
);
exports.FindUniqueEventResolver = FindUniqueEventResolver;
