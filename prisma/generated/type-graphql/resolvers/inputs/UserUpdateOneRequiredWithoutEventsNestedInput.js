"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutEventsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutEventsInput_1 = require("../inputs/UserCreateOrConnectWithoutEventsInput");
const UserCreateWithoutEventsInput_1 = require("../inputs/UserCreateWithoutEventsInput");
const UserUpdateWithoutEventsInput_1 = require("../inputs/UserUpdateWithoutEventsInput");
const UserUpsertWithoutEventsInput_1 = require("../inputs/UserUpsertWithoutEventsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutEventsNestedInput = class UserUpdateOneRequiredWithoutEventsNestedInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput
    ),
  ],
  UserUpdateOneRequiredWithoutEventsNestedInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateOrConnectWithoutEventsInput_1.UserCreateOrConnectWithoutEventsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateOrConnectWithoutEventsInput_1.UserCreateOrConnectWithoutEventsInput
    ),
  ],
  UserUpdateOneRequiredWithoutEventsNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserUpsertWithoutEventsInput_1.UserUpsertWithoutEventsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpsertWithoutEventsInput_1.UserUpsertWithoutEventsInput
    ),
  ],
  UserUpdateOneRequiredWithoutEventsNestedInput.prototype,
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
  UserUpdateOneRequiredWithoutEventsNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserUpdateWithoutEventsInput_1.UserUpdateWithoutEventsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutEventsInput_1.UserUpdateWithoutEventsInput
    ),
  ],
  UserUpdateOneRequiredWithoutEventsNestedInput.prototype,
  "update",
  void 0
);
UserUpdateOneRequiredWithoutEventsNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutEventsNestedInput", {
      isAbstract: true,
    }),
  ],
  UserUpdateOneRequiredWithoutEventsNestedInput
);
exports.UserUpdateOneRequiredWithoutEventsNestedInput =
  UserUpdateOneRequiredWithoutEventsNestedInput;
