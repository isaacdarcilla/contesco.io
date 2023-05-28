"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateNestedOneWithoutContestantsInput_1 = require("../inputs/EventCreateNestedOneWithoutContestantsInput");
let ContestantCreateWithoutUserInput = class ContestantCreateWithoutUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "firstName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "middleName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "lastName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "gender",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "age",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "nationality",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "birthDate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "phoneNumber",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "email",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "photo",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  ContestantCreateWithoutUserInput.prototype,
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
  ContestantCreateWithoutUserInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventCreateNestedOneWithoutContestantsInput_1.EventCreateNestedOneWithoutContestantsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCreateNestedOneWithoutContestantsInput_1.EventCreateNestedOneWithoutContestantsInput
    ),
  ],
  ContestantCreateWithoutUserInput.prototype,
  "event",
  void 0
);
ContestantCreateWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  ContestantCreateWithoutUserInput
);
exports.ContestantCreateWithoutUserInput = ContestantCreateWithoutUserInput;
