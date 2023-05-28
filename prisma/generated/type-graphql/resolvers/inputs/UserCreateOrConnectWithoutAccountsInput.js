"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAccountsInput_1 = require("../inputs/UserCreateWithoutAccountsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAccountsInput = class UserCreateOrConnectWithoutAccountsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserWhereUniqueInput_1.UserWhereUniqueInput, {
      nullable: false,
    }),
    tslib_1.__metadata(
      "design:type",
      UserWhereUniqueInput_1.UserWhereUniqueInput
    ),
  ],
  UserCreateOrConnectWithoutAccountsInput.prototype,
  "where",
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
  UserCreateOrConnectWithoutAccountsInput.prototype,
  "create",
  void 0
);
UserCreateOrConnectWithoutAccountsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAccountsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateOrConnectWithoutAccountsInput
);
exports.UserCreateOrConnectWithoutAccountsInput =
  UserCreateOrConnectWithoutAccountsInput;
