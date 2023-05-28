"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let VerificationTokenUpdateInput = class VerificationTokenUpdateInput {};
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
  VerificationTokenUpdateInput.prototype,
  "identifier",
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
  VerificationTokenUpdateInput.prototype,
  "token",
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
  VerificationTokenUpdateInput.prototype,
  "expires",
  void 0
);
VerificationTokenUpdateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenUpdateInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenUpdateInput
);
exports.VerificationTokenUpdateInput = VerificationTokenUpdateInput;
