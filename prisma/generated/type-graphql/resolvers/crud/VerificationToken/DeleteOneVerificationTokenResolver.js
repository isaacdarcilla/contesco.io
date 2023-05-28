"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneVerificationTokenArgs_1 = require("./args/DeleteOneVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let DeleteOneVerificationTokenResolver = class DeleteOneVerificationTokenResolver {
  async deleteOneVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.delete({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => VerificationToken_1.VerificationToken, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      DeleteOneVerificationTokenArgs_1.DeleteOneVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  DeleteOneVerificationTokenResolver.prototype,
  "deleteOneVerificationToken",
  null
);
DeleteOneVerificationTokenResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  DeleteOneVerificationTokenResolver
);
exports.DeleteOneVerificationTokenResolver = DeleteOneVerificationTokenResolver;
