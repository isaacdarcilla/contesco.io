"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const ContestantCreateNestedManyWithoutUserInput_1 = require("../inputs/ContestantCreateNestedManyWithoutUserInput");
const EventCreateNestedManyWithoutUserInput_1 = require("../inputs/EventCreateNestedManyWithoutUserInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutSessionsInput = class UserCreateWithoutSessionsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
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
  UserCreateWithoutSessionsInput.prototype,
  "accounts",
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
  UserCreateWithoutSessionsInput.prototype,
  "events",
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
  UserCreateWithoutSessionsInput.prototype,
  "Contestant",
  void 0
);
UserCreateWithoutSessionsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateWithoutSessionsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateWithoutSessionsInput
);
exports.UserCreateWithoutSessionsInput = UserCreateWithoutSessionsInput;
