"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventCreateManyUserInput = class EventCreateManyUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
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
  EventCreateManyUserInput.prototype,
  "updatedAt",
  void 0
);
EventCreateManyUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventCreateManyUserInput", {
      isAbstract: true,
    }),
  ],
  EventCreateManyUserInput
);
exports.EventCreateManyUserInput = EventCreateManyUserInput;
