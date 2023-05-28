"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneAccountArgs_1 = require("./args/CreateOneAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let CreateOneAccountResolver = class CreateOneAccountResolver {
  async createOneAccount(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).account.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Account_1.Account, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneAccountArgs_1.CreateOneAccountArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  CreateOneAccountResolver.prototype,
  "createOneAccount",
  null
);
CreateOneAccountResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Account_1.Account)],
  CreateOneAccountResolver
);
exports.CreateOneAccountResolver = CreateOneAccountResolver;
