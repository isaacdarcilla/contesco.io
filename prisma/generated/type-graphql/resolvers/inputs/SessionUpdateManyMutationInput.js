"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SessionUpdateManyMutationInput = class SessionUpdateManyMutationInput {};
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
  SessionUpdateManyMutationInput.prototype,
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
  SessionUpdateManyMutationInput.prototype,
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
  SessionUpdateManyMutationInput.prototype,
  "expires",
  void 0
);
SessionUpdateManyMutationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionUpdateManyMutationInput", {
      isAbstract: true,
    }),
  ],
  SessionUpdateManyMutationInput
);
exports.SessionUpdateManyMutationInput = SessionUpdateManyMutationInput;
