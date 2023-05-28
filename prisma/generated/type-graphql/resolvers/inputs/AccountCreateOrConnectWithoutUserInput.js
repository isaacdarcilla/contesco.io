"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateOrConnectWithoutUserInput = class AccountCreateOrConnectWithoutUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountWhereUniqueInput_1.AccountWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountWhereUniqueInput_1.AccountWhereUniqueInput
    ),
  ],
  AccountCreateOrConnectWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput
    ),
  ],
  AccountCreateOrConnectWithoutUserInput.prototype,
  "create",
  void 0
);
AccountCreateOrConnectWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountCreateOrConnectWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  AccountCreateOrConnectWithoutUserInput
);
exports.AccountCreateOrConnectWithoutUserInput =
  AccountCreateOrConnectWithoutUserInput;
