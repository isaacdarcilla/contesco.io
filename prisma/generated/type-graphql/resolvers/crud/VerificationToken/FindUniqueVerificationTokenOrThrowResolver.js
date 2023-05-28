"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVerificationTokenOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueVerificationTokenOrThrowArgs_1 = require("./args/FindUniqueVerificationTokenOrThrowArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let FindUniqueVerificationTokenOrThrowResolver = class FindUniqueVerificationTokenOrThrowResolver {
  async getVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.findUniqueOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindUniqueVerificationTokenOrThrowArgs_1.FindUniqueVerificationTokenOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindUniqueVerificationTokenOrThrowResolver.prototype,
  "getVerificationToken",
  null
);
FindUniqueVerificationTokenOrThrowResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  FindUniqueVerificationTokenOrThrowResolver
);
exports.FindUniqueVerificationTokenOrThrowResolver =
  FindUniqueVerificationTokenOrThrowResolver;
