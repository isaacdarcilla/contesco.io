"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutAccountsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAccountsNestedInput");
let AccountUpdateInput = class AccountUpdateInput {};
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
  AccountUpdateInput.prototype,
  "id",
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
  AccountUpdateInput.prototype,
  "type",
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
  AccountUpdateInput.prototype,
  "provider",
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
  AccountUpdateInput.prototype,
  "providerAccountId",
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
  AccountUpdateInput.prototype,
  "refresh_token",
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
  AccountUpdateInput.prototype,
  "access_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput
    ),
  ],
  AccountUpdateInput.prototype,
  "expires_at",
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
  AccountUpdateInput.prototype,
  "token_type",
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
  AccountUpdateInput.prototype,
  "scope",
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
  AccountUpdateInput.prototype,
  "id_token",
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
  AccountUpdateInput.prototype,
  "session_state",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateOneRequiredWithoutAccountsNestedInput_1.UserUpdateOneRequiredWithoutAccountsNestedInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateOneRequiredWithoutAccountsNestedInput_1.UserUpdateOneRequiredWithoutAccountsNestedInput
    ),
  ],
  AccountUpdateInput.prototype,
  "user",
  void 0
);
AccountUpdateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountUpdateInput", {
      isAbstract: true,
    }),
  ],
  AccountUpdateInput
);
exports.AccountUpdateInput = AccountUpdateInput;
