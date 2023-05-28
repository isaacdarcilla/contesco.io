"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SessionUpdateWithoutUserInput = class SessionUpdateWithoutUserInput {};
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
  SessionUpdateWithoutUserInput.prototype,
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
  SessionUpdateWithoutUserInput.prototype,
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
  SessionUpdateWithoutUserInput.prototype,
  "expires",
  void 0
);
SessionUpdateWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionUpdateWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  SessionUpdateWithoutUserInput
);
exports.SessionUpdateWithoutUserInput = SessionUpdateWithoutUserInput;
