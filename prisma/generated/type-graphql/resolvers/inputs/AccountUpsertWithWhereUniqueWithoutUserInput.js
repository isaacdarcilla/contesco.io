"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountUpdateWithoutUserInput_1 = require("../inputs/AccountUpdateWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpsertWithWhereUniqueWithoutUserInput = class AccountUpsertWithWhereUniqueWithoutUserInput {};
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
  AccountUpsertWithWhereUniqueWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountUpdateWithoutUserInput_1.AccountUpdateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountUpdateWithoutUserInput_1.AccountUpdateWithoutUserInput
    ),
  ],
  AccountUpsertWithWhereUniqueWithoutUserInput.prototype,
  "update",
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
  AccountUpsertWithWhereUniqueWithoutUserInput.prototype,
  "create",
  void 0
);
AccountUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountUpsertWithWhereUniqueWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  AccountUpsertWithWhereUniqueWithoutUserInput
);
exports.AccountUpsertWithWhereUniqueWithoutUserInput =
  AccountUpsertWithWhereUniqueWithoutUserInput;
