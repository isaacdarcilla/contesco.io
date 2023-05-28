"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByWithRelationInput_1 = require("../../../inputs/AccountOrderByWithRelationInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
const AccountScalarFieldEnum_1 = require("../../../../enums/AccountScalarFieldEnum");
let UserAccountsArgs = class UserAccountsArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  UserAccountsArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        AccountOrderByWithRelationInput_1.AccountOrderByWithRelationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  UserAccountsArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountWhereUniqueInput_1.AccountWhereUniqueInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountWhereUniqueInput_1.AccountWhereUniqueInput
    ),
  ],
  UserAccountsArgs.prototype,
  "cursor",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  UserAccountsArgs.prototype,
  "take",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  UserAccountsArgs.prototype,
  "skip",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [AccountScalarFieldEnum_1.AccountScalarFieldEnum],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  UserAccountsArgs.prototype,
  "distinct",
  void 0
);
UserAccountsArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UserAccountsArgs
);
exports.UserAccountsArgs = UserAccountsArgs;
