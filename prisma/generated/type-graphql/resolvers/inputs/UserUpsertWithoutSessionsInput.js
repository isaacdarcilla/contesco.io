"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutSessionsInput_1 = require("../inputs/UserCreateWithoutSessionsInput");
const UserUpdateWithoutSessionsInput_1 = require("../inputs/UserUpdateWithoutSessionsInput");
let UserUpsertWithoutSessionsInput = class UserUpsertWithoutSessionsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateWithoutSessionsInput_1.UserUpdateWithoutSessionsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutSessionsInput_1.UserUpdateWithoutSessionsInput
    ),
  ],
  UserUpsertWithoutSessionsInput.prototype,
  "update",
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
  UserUpsertWithoutSessionsInput.prototype,
  "create",
  void 0
);
UserUpsertWithoutSessionsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpsertWithoutSessionsInput", {
      isAbstract: true,
    }),
  ],
  UserUpsertWithoutSessionsInput
);
exports.UserUpsertWithoutSessionsInput = UserUpsertWithoutSessionsInput;
