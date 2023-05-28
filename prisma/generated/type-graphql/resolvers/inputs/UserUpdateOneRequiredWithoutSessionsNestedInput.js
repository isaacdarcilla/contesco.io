"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutSessionsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutSessionsInput_1 = require("../inputs/UserCreateOrConnectWithoutSessionsInput");
const UserCreateWithoutSessionsInput_1 = require("../inputs/UserCreateWithoutSessionsInput");
const UserUpdateWithoutSessionsInput_1 = require("../inputs/UserUpdateWithoutSessionsInput");
const UserUpsertWithoutSessionsInput_1 = require("../inputs/UserUpsertWithoutSessionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutSessionsNestedInput = class UserUpdateOneRequiredWithoutSessionsNestedInput {};
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
  UserUpdateOneRequiredWithoutSessionsNestedInput.prototype,
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
  UserUpdateOneRequiredWithoutSessionsNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpsertWithoutSessionsInput_1.UserUpsertWithoutSessionsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpsertWithoutSessionsInput_1.UserUpsertWithoutSessionsInput
    ),
  ],
  UserUpdateOneRequiredWithoutSessionsNestedInput.prototype,
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
  UserUpdateOneRequiredWithoutSessionsNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateWithoutSessionsInput_1.UserUpdateWithoutSessionsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutSessionsInput_1.UserUpdateWithoutSessionsInput
    ),
  ],
  UserUpdateOneRequiredWithoutSessionsNestedInput.prototype,
  "update",
  void 0
);
UserUpdateOneRequiredWithoutSessionsNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSessionsNestedInput", {
      isAbstract: true,
    }),
  ],
  UserUpdateOneRequiredWithoutSessionsNestedInput
);
exports.UserUpdateOneRequiredWithoutSessionsNestedInput =
  UserUpdateOneRequiredWithoutSessionsNestedInput;
