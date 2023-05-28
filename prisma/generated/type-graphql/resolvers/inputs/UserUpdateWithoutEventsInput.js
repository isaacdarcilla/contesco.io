"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutEventsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserNestedInput_1 = require("../inputs/AccountUpdateManyWithoutUserNestedInput");
const ContestantUpdateManyWithoutUserNestedInput_1 = require("../inputs/ContestantUpdateManyWithoutUserNestedInput");
const EnumUserRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumUserRoleFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUserNestedInput_1 = require("../inputs/SessionUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutEventsInput = class UserUpdateWithoutEventsInput {};
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
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
  UserUpdateWithoutEventsInput.prototype,
  "sessions",
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
  UserUpdateWithoutEventsInput.prototype,
  "Contestant",
  void 0
);
UserUpdateWithoutEventsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserUpdateWithoutEventsInput", {
      isAbstract: true,
    }),
  ],
  UserUpdateWithoutEventsInput
);
exports.UserUpdateWithoutEventsInput = UserUpdateWithoutEventsInput;
