"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateNestedManyWithoutEventInput_1 = require("../inputs/ContestantCreateNestedManyWithoutEventInput");
const UserCreateNestedOneWithoutEventsInput_1 = require("../inputs/UserCreateNestedOneWithoutEventsInput");
let EventCreateInput = class EventCreateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
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
  EventCreateInput.prototype,
  "name",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
  "description",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
  "organizer",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
  "type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
  "category",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
  "tags",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
  "banner",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateInput.prototype,
  "slug",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  EventCreateInput.prototype,
  "eventStarts",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  EventCreateInput.prototype,
  "eventEnds",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  EventCreateInput.prototype,
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
  EventCreateInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateNestedManyWithoutEventInput_1.ContestantCreateNestedManyWithoutEventInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateNestedManyWithoutEventInput_1.ContestantCreateNestedManyWithoutEventInput
    ),
  ],
  EventCreateInput.prototype,
  "contestants",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateNestedOneWithoutEventsInput_1.UserCreateNestedOneWithoutEventsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateNestedOneWithoutEventsInput_1.UserCreateNestedOneWithoutEventsInput
    ),
  ],
  EventCreateInput.prototype,
  "user",
  void 0
);
EventCreateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventCreateInput", {
      isAbstract: true,
    }),
  ],
  EventCreateInput
);
exports.EventCreateInput = EventCreateInput;
