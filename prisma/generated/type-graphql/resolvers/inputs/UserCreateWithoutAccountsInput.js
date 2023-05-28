"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateNestedManyWithoutUserInput_1 = require("../inputs/ContestantCreateNestedManyWithoutUserInput");
const EventCreateNestedManyWithoutUserInput_1 = require("../inputs/EventCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutAccountsInput = class UserCreateWithoutAccountsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
  "updatedAt",
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
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
  UserCreateWithoutAccountsInput.prototype,
  "Contestant",
  void 0
);
UserCreateWithoutAccountsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateWithoutAccountsInput
);
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput;
