"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutContestantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutContestantInput_1 = require("../inputs/UserCreateWithoutContestantInput");
const UserUpdateWithoutContestantInput_1 = require("../inputs/UserUpdateWithoutContestantInput");
let UserUpsertWithoutContestantInput = class UserUpsertWithoutContestantInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateWithoutContestantInput_1.UserUpdateWithoutContestantInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateWithoutContestantInput_1.UserUpdateWithoutContestantInput
    ),
  ],
  UserUpsertWithoutContestantInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput
    ),
  ],
  UserUpsertWithoutContestantInput.prototype,
  "create",
  void 0
);
UserUpsertWithoutContestantInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpsertWithoutContestantInput", {
      isAbstract: true,
    }),
  ],
  UserUpsertWithoutContestantInput
);
exports.UserUpsertWithoutContestantInput = UserUpsertWithoutContestantInput;
