"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAccountsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAccountsInput_1 = require("../inputs/UserCreateOrConnectWithoutAccountsInput");
const UserCreateWithoutAccountsInput_1 = require("../inputs/UserCreateWithoutAccountsInput");
const UserUpdateWithoutAccountsInput_1 = require("../inputs/UserUpdateWithoutAccountsInput");
const UserUpsertWithoutAccountsInput_1 = require("../inputs/UserUpsertWithoutAccountsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAccountsNestedInput = class UserUpdateOneRequiredWithoutAccountsNestedInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutAccountsInput_1.UserCreateWithoutAccountsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutAccountsInput_1.UserCreateWithoutAccountsInput
    ),
  ],
  UserUpdateOneRequiredWithoutAccountsNestedInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateOrConnectWithoutAccountsInput_1.UserCreateOrConnectWithoutAccountsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateOrConnectWithoutAccountsInput_1.UserCreateOrConnectWithoutAccountsInput
    ),
  ],
  UserUpdateOneRequiredWithoutAccountsNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpsertWithoutAccountsInput_1.UserUpsertWithoutAccountsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpsertWithoutAccountsInput_1.UserUpsertWithoutAccountsInput
    ),
  ],
  UserUpdateOneRequiredWithoutAccountsNestedInput.prototype,
  "upsert",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserWhereUniqueInput_1.UserWhereUniqueInput, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      UserWhereUniqueInput_1.UserWhereUniqueInput
    ),
  ],
  UserUpdateOneRequiredWithoutAccountsNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput
    ),
  ],
  UserUpdateOneRequiredWithoutAccountsNestedInput.prototype,
  "update",
  void 0
);
UserUpdateOneRequiredWithoutAccountsNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAccountsNestedInput", {
      isAbstract: true,
    }),
  ],
  UserUpdateOneRequiredWithoutAccountsNestedInput
);
exports.UserUpdateOneRequiredWithoutAccountsNestedInput =
  UserUpdateOneRequiredWithoutAccountsNestedInput;
