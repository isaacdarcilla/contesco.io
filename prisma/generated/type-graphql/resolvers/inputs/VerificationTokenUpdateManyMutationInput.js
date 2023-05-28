"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let VerificationTokenUpdateManyMutationInput = class VerificationTokenUpdateManyMutationInput {};
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
  VerificationTokenUpdateManyMutationInput.prototype,
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
  VerificationTokenUpdateManyMutationInput.prototype,
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
  VerificationTokenUpdateManyMutationInput.prototype,
  "expires",
  void 0
);
VerificationTokenUpdateManyMutationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenUpdateManyMutationInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenUpdateManyMutationInput
);
exports.VerificationTokenUpdateManyMutationInput =
  VerificationTokenUpdateManyMutationInput;
