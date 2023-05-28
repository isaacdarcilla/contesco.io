"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVerificationTokenOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstVerificationTokenOrThrowArgs_1 = require("./args/FindFirstVerificationTokenOrThrowArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let FindFirstVerificationTokenOrThrowResolver = class FindFirstVerificationTokenOrThrowResolver {
  async findFirstVerificationTokenOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.findFirstOrThrow({
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
      FindFirstVerificationTokenOrThrowArgs_1.FindFirstVerificationTokenOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindFirstVerificationTokenOrThrowResolver.prototype,
  "findFirstVerificationTokenOrThrow",
  null
);
FindFirstVerificationTokenOrThrowResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  FindFirstVerificationTokenOrThrowResolver
);
exports.FindFirstVerificationTokenOrThrowResolver =
  FindFirstVerificationTokenOrThrowResolver;
