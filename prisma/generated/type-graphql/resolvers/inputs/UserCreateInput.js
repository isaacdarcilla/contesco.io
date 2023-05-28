"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const ContestantCreateNestedManyWithoutUserInput_1 = require("../inputs/ContestantCreateNestedManyWithoutUserInput");
const EventCreateNestedManyWithoutUserInput_1 = require("../inputs/EventCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateInput = class UserCreateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
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
  UserCreateInput.prototype,
  "Contestant",
  void 0
);
UserCreateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateInput", {
      isAbstract: true,
    }),
  ],
  UserCreateInput
);
exports.UserCreateInput = UserCreateInput;
