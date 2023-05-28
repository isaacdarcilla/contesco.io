"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserNestedInput_1 = require("../inputs/AccountUpdateManyWithoutUserNestedInput");
const ContestantUpdateManyWithoutUserNestedInput_1 = require("../inputs/ContestantUpdateManyWithoutUserNestedInput");
const EnumUserRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumUserRoleFieldUpdateOperationsInput");
const EventUpdateManyWithoutUserNestedInput_1 = require("../inputs/EventUpdateManyWithoutUserNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUserNestedInput_1 = require("../inputs/SessionUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateInput = class UserUpdateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "name",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "email",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "emailVerified",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "image",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "role",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput
    ),
  ],
  UserUpdateInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput
    ),
  ],
  UserUpdateInput.prototype,
  "accounts",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput
    ),
  ],
  UserUpdateInput.prototype,
  "sessions",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventUpdateManyWithoutUserNestedInput_1.EventUpdateManyWithoutUserNestedInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventUpdateManyWithoutUserNestedInput_1.EventUpdateManyWithoutUserNestedInput
    ),
  ],
  UserUpdateInput.prototype,
  "events",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantUpdateManyWithoutUserNestedInput_1.ContestantUpdateManyWithoutUserNestedInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantUpdateManyWithoutUserNestedInput_1.ContestantUpdateManyWithoutUserNestedInput
    ),
  ],
  UserUpdateInput.prototype,
  "Contestant",
  void 0
);
UserUpdateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpdateInput", {
      isAbstract: true,
    }),
  ],
  UserUpdateInput
);
exports.UserUpdateInput = UserUpdateInput;
