"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSessionsInput_1 = require("../inputs/UserCreateWithoutSessionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutSessionsInput = class UserCreateOrConnectWithoutSessionsInput {};
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
  UserCreateOrConnectWithoutSessionsInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutSessionsInput_1.UserCreateWithoutSessionsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutSessionsInput_1.UserCreateWithoutSessionsInput
    ),
  ],
  UserCreateOrConnectWithoutSessionsInput.prototype,
  "create",
  void 0
);
UserCreateOrConnectWithoutSessionsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateOrConnectWithoutSessionsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateOrConnectWithoutSessionsInput
);
exports.UserCreateOrConnectWithoutSessionsInput =
  UserCreateOrConnectWithoutSessionsInput;
