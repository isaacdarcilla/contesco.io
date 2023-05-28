"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateNestedOneWithoutContestantsInput_1 = require("../inputs/EventCreateNestedOneWithoutContestantsInput");
const UserCreateNestedOneWithoutContestantInput_1 = require("../inputs/UserCreateNestedOneWithoutContestantInput");
let ContestantCreateInput = class ContestantCreateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
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
  ContestantCreateInput.prototype,
  "event",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateNestedOneWithoutContestantInput_1.UserCreateNestedOneWithoutContestantInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateNestedOneWithoutContestantInput_1.UserCreateNestedOneWithoutContestantInput
    ),
  ],
  ContestantCreateInput.prototype,
  "user",
  void 0
);
ContestantCreateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateInput", {
      isAbstract: true,
    }),
  ],
  ContestantCreateInput
);
exports.ContestantCreateInput = ContestantCreateInput;
