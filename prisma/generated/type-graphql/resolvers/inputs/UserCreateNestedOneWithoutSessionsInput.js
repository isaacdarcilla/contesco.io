"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSessionsInput_1 = require("../inputs/UserCreateOrConnectWithoutSessionsInput");
const UserCreateWithoutSessionsInput_1 = require("../inputs/UserCreateWithoutSessionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutSessionsInput = class UserCreateNestedOneWithoutSessionsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutSessionsInput_1.UserCreateWithoutSessionsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutSessionsInput_1.UserCreateWithoutSessionsInput
    ),
  ],
  UserCreateNestedOneWithoutSessionsInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateOrConnectWithoutSessionsInput_1.UserCreateOrConnectWithoutSessionsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateOrConnectWithoutSessionsInput_1.UserCreateOrConnectWithoutSessionsInput
    ),
  ],
  UserCreateNestedOneWithoutSessionsInput.prototype,
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
  UserCreateNestedOneWithoutSessionsInput.prototype,
  "connect",
  void 0
);
UserCreateNestedOneWithoutSessionsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateNestedOneWithoutSessionsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateNestedOneWithoutSessionsInput
);
exports.UserCreateNestedOneWithoutSessionsInput =
  UserCreateNestedOneWithoutSessionsInput;
