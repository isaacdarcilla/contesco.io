"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateOneRequiredWithoutContestantsNestedInput_1 = require("../inputs/EventUpdateOneRequiredWithoutContestantsNestedInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ContestantUpdateWithoutUserInput = class ContestantUpdateWithoutUserInput {};
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
  ContestantUpdateWithoutUserInput.prototype,
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
  ContestantUpdateWithoutUserInput.prototype,
  "firstName",
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
  ContestantUpdateWithoutUserInput.prototype,
  "middleName",
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
  ContestantUpdateWithoutUserInput.prototype,
  "lastName",
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
  ContestantUpdateWithoutUserInput.prototype,
  "gender",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput
    ),
  ],
  ContestantUpdateWithoutUserInput.prototype,
  "age",
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
  ContestantUpdateWithoutUserInput.prototype,
  "nationality",
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
  ContestantUpdateWithoutUserInput.prototype,
  "birthDate",
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
  ContestantUpdateWithoutUserInput.prototype,
  "phoneNumber",
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
  ContestantUpdateWithoutUserInput.prototype,
  "email",
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
  ContestantUpdateWithoutUserInput.prototype,
  "photo",
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
  ContestantUpdateWithoutUserInput.prototype,
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
  ContestantUpdateWithoutUserInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventUpdateOneRequiredWithoutContestantsNestedInput_1.EventUpdateOneRequiredWithoutContestantsNestedInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventUpdateOneRequiredWithoutContestantsNestedInput_1.EventUpdateOneRequiredWithoutContestantsNestedInput
    ),
  ],
  ContestantUpdateWithoutUserInput.prototype,
  "event",
  void 0
);
ContestantUpdateWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpdateWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpdateWithoutUserInput
);
exports.ContestantUpdateWithoutUserInput = ContestantUpdateWithoutUserInput;
