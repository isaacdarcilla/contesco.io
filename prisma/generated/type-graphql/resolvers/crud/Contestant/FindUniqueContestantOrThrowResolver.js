"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueContestantOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueContestantOrThrowArgs_1 = require("./args/FindUniqueContestantOrThrowArgs");
const Contestant_1 = require("../../../models/Contestant");
const helpers_1 = require("../../../helpers");
let FindUniqueContestantOrThrowResolver = class FindUniqueContestantOrThrowResolver {
  async getContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).contestant.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueContestantOrThrowArgs_1.FindUniqueContestantOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindUniqueContestantOrThrowResolver.prototype,
  "getContestant",
  null
);
FindUniqueContestantOrThrowResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  FindUniqueContestantOrThrowResolver
);
exports.FindUniqueContestantOrThrowResolver =
  FindUniqueContestantOrThrowResolver;
