"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSessionsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSessionsNestedInput");
let SessionUpdateInput = class SessionUpdateInput {};
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
  SessionUpdateInput.prototype,
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
  SessionUpdateInput.prototype,
  "sessionToken",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput
    ),
  ],
  SessionUpdateInput.prototype,
  "expires",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserUpdateOneRequiredWithoutSessionsNestedInput_1.UserUpdateOneRequiredWithoutSessionsNestedInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserUpdateOneRequiredWithoutSessionsNestedInput_1.UserUpdateOneRequiredWithoutSessionsNestedInput
    ),
  ],
  SessionUpdateInput.prototype,
  "user",
  void 0
);
SessionUpdateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionUpdateInput", {
      isAbstract: true,
    }),
  ],
  SessionUpdateInput
);
exports.SessionUpdateInput = SessionUpdateInput;
