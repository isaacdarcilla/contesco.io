"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutEventsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const ContestantCreateNestedManyWithoutUserInput_1 = require("../inputs/ContestantCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutEventsInput = class UserCreateWithoutEventsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
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
  UserCreateWithoutEventsInput.prototype,
  "sessions",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateNestedManyWithoutUserInput_1.ContestantCreateNestedManyWithoutUserInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateNestedManyWithoutUserInput_1.ContestantCreateNestedManyWithoutUserInput
    ),
  ],
  UserCreateWithoutEventsInput.prototype,
  "Contestant",
  void 0
);
UserCreateWithoutEventsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateWithoutEventsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateWithoutEventsInput
);
exports.UserCreateWithoutEventsInput = UserCreateWithoutEventsInput;
