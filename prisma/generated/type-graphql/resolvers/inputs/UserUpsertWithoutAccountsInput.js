"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAccountsInput_1 = require("../inputs/UserCreateWithoutAccountsInput");
const UserUpdateWithoutAccountsInput_1 = require("../inputs/UserUpdateWithoutAccountsInput");
let UserUpsertWithoutAccountsInput = class UserUpsertWithoutAccountsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput
    ),
  ],
  UserUpsertWithoutAccountsInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutAccountsInput_1.UserCreateWithoutAccountsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutAccountsInput_1.UserCreateWithoutAccountsInput
    ),
  ],
  UserUpsertWithoutAccountsInput.prototype,
  "create",
  void 0
);
UserUpsertWithoutAccountsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpsertWithoutAccountsInput", {
      isAbstract: true,
    }),
  ],
  UserUpsertWithoutAccountsInput
);
exports.UserUpsertWithoutAccountsInput = UserUpsertWithoutAccountsInput;
