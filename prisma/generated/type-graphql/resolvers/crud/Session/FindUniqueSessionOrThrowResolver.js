"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSessionOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSessionOrThrowArgs_1 = require("./args/FindUniqueSessionOrThrowArgs");
const Session_1 = require("../../../models/Session");
const helpers_1 = require("../../../helpers");
let FindUniqueSessionOrThrowResolver = class FindUniqueSessionOrThrowResolver {
  async getSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Session_1.Session, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueSessionOrThrowArgs_1.FindUniqueSessionOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindUniqueSessionOrThrowResolver.prototype,
  "getSession",
  null
);
FindUniqueSessionOrThrowResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  FindUniqueSessionOrThrowResolver
);
exports.FindUniqueSessionOrThrowResolver = FindUniqueSessionOrThrowResolver;
