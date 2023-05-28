"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyVerificationTokenArgs_1 = require("./args/UpdateManyVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyVerificationTokenResolver = class UpdateManyVerificationTokenResolver {
  async updateManyVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(
      ctx
    ).verificationToken.updateMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation(
      (_returns) => AffectedRowsOutput_1.AffectedRowsOutput,
      {
        nullable: false,
      }
    ),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateManyVerificationTokenArgs_1.UpdateManyVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UpdateManyVerificationTokenResolver.prototype,
  "updateManyVerificationToken",
  null
);
UpdateManyVerificationTokenResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  UpdateManyVerificationTokenResolver
);
exports.UpdateManyVerificationTokenResolver =
  UpdateManyVerificationTokenResolver;
