"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutEventsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutEventsInput_1 = require("../inputs/UserCreateWithoutEventsInput");
const UserUpdateWithoutEventsInput_1 = require("../inputs/UserUpdateWithoutEventsInput");
let UserUpsertWithoutEventsInput = class UserUpsertWithoutEventsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserUpdateWithoutEventsInput_1.UserUpdateWithoutEventsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutEventsInput_1.UserUpdateWithoutEventsInput
    ),
  ],
  UserUpsertWithoutEventsInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput
    ),
  ],
  UserUpsertWithoutEventsInput.prototype,
  "create",
  void 0
);
UserUpsertWithoutEventsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpsertWithoutEventsInput", {
      isAbstract: true,
    }),
  ],
  UserUpsertWithoutEventsInput
);
exports.UserUpsertWithoutEventsInput = UserUpsertWithoutEventsInput;
