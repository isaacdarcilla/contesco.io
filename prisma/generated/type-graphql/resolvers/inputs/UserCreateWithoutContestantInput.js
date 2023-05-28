"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutContestantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const EventCreateNestedManyWithoutUserInput_1 = require("../inputs/EventCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutContestantInput = class UserCreateWithoutContestantInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutContestantInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutContestantInput.prototype,
  "name",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutContestantInput.prototype,
  "email",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  UserCreateWithoutContestantInput.prototype,
  "emailVerified",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutContestantInput.prototype,
  "image",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRole_1.UserRole, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutContestantInput.prototype,
  "role",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  UserCreateWithoutContestantInput.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  UserCreateWithoutContestantInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput
    ),
  ],
  UserCreateWithoutContestantInput.prototype,
  "accounts",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput
    ),
  ],
  UserCreateWithoutContestantInput.prototype,
  "sessions",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventCreateNestedManyWithoutUserInput_1.EventCreateNestedManyWithoutUserInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCreateNestedManyWithoutUserInput_1.EventCreateNestedManyWithoutUserInput
    ),
  ],
  UserCreateWithoutContestantInput.prototype,
  "events",
  void 0
);
UserCreateWithoutContestantInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateWithoutContestantInput", {
      isAbstract: true,
    }),
  ],
  UserCreateWithoutContestantInput
);
exports.UserCreateWithoutContestantInput = UserCreateWithoutContestantInput;
