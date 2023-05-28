"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutContestantNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutContestantInput_1 = require("../inputs/UserCreateOrConnectWithoutContestantInput");
const UserCreateWithoutContestantInput_1 = require("../inputs/UserCreateWithoutContestantInput");
const UserUpdateWithoutContestantInput_1 = require("../inputs/UserUpdateWithoutContestantInput");
const UserUpsertWithoutContestantInput_1 = require("../inputs/UserUpsertWithoutContestantInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutContestantNestedInput = class UserUpdateOneRequiredWithoutContestantNestedInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput
    ),
  ],
  UserUpdateOneRequiredWithoutContestantNestedInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateOrConnectWithoutContestantInput_1.UserCreateOrConnectWithoutContestantInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateOrConnectWithoutContestantInput_1.UserCreateOrConnectWithoutContestantInput
    ),
  ],
  UserUpdateOneRequiredWithoutContestantNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpsertWithoutContestantInput_1.UserUpsertWithoutContestantInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpsertWithoutContestantInput_1.UserUpsertWithoutContestantInput
    ),
  ],
  UserUpdateOneRequiredWithoutContestantNestedInput.prototype,
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
  UserUpdateOneRequiredWithoutContestantNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateWithoutContestantInput_1.UserUpdateWithoutContestantInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutContestantInput_1.UserUpdateWithoutContestantInput
    ),
  ],
  UserUpdateOneRequiredWithoutContestantNestedInput.prototype,
  "update",
  void 0
);
UserUpdateOneRequiredWithoutContestantNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutContestantNestedInput", {
      isAbstract: true,
    }),
  ],
  UserUpdateOneRequiredWithoutContestantNestedInput
);
exports.UserUpdateOneRequiredWithoutContestantNestedInput =
  UserUpdateOneRequiredWithoutContestantNestedInput;
