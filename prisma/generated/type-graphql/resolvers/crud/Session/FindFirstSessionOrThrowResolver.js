"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSessionOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSessionOrThrowArgs_1 = require("./args/FindFirstSessionOrThrowArgs");
const Session_1 = require("../../../models/Session");
const helpers_1 = require("../../../helpers");
let FindFirstSessionOrThrowResolver = class FindFirstSessionOrThrowResolver {
  async findFirstSessionOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findFirstOrThrow({
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
      FindFirstSessionOrThrowArgs_1.FindFirstSessionOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindFirstSessionOrThrowResolver.prototype,
  "findFirstSessionOrThrow",
  null
);
FindFirstSessionOrThrowResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  FindFirstSessionOrThrowResolver
);
exports.FindFirstSessionOrThrowResolver = FindFirstSessionOrThrowResolver;
