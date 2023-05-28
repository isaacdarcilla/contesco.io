"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let AccountRelationsResolver = class AccountRelationsResolver {
  async user(account, ctx, info) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .account.findUniqueOrThrow({
        where: {
          id: account.id,
        },
      })
      .user({
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => User_1.User, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Account_1.Account,
      Object,
      Object,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AccountRelationsResolver.prototype,
  "user",
  null
);
AccountRelationsResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Account_1.Account)],
  AccountRelationsResolver
);
exports.AccountRelationsResolver = AccountRelationsResolver;
