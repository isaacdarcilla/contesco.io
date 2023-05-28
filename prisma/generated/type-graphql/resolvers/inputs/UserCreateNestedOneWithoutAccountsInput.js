"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAccountsInput_1 = require("../inputs/UserCreateOrConnectWithoutAccountsInput");
const UserCreateWithoutAccountsInput_1 = require("../inputs/UserCreateWithoutAccountsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAccountsInput = class UserCreateNestedOneWithoutAccountsInput {};
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
  UserCreateNestedOneWithoutAccountsInput.prototype,
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
  UserCreateNestedOneWithoutAccountsInput.prototype,
  "connectOrCreate",
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
  UserCreateNestedOneWithoutAccountsInput.prototype,
  "connect",
  void 0
);
UserCreateNestedOneWithoutAccountsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAccountsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateNestedOneWithoutAccountsInput
);
exports.UserCreateNestedOneWithoutAccountsInput =
  UserCreateNestedOneWithoutAccountsInput;
