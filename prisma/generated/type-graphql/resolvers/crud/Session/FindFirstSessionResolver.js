"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSessionArgs_1 = require("./args/FindFirstSessionArgs");
const Session_1 = require("../../../models/Session");
const helpers_1 = require("../../../helpers");
let FindFirstSessionResolver = class FindFirstSessionResolver {
  async findFirstSession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.findFirst({
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
      FindFirstSessionArgs_1.FindFirstSessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindFirstSessionResolver.prototype,
  "findFirstSession",
  null
);
FindFirstSessionResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  FindFirstSessionResolver
);
exports.FindFirstSessionResolver = FindFirstSessionResolver;
