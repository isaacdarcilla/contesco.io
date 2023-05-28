"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneVerificationTokenArgs_1 = require("./args/CreateOneVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let CreateOneVerificationTokenResolver = class CreateOneVerificationTokenResolver {
  async createOneVerificationToken(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => VerificationToken_1.VerificationToken, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneVerificationTokenArgs_1.CreateOneVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  CreateOneVerificationTokenResolver.prototype,
  "createOneVerificationToken",
  null
);
CreateOneVerificationTokenResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  CreateOneVerificationTokenResolver
);
exports.CreateOneVerificationTokenResolver = CreateOneVerificationTokenResolver;
