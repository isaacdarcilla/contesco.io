"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantOrderByRelationAggregateInput_1 = require("../inputs/ContestantOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EventOrderByWithRelationInput = class EventOrderByWithRelationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "name",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "description",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "organizer",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "category",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "tags",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "banner",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "slug",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "eventStarts",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "eventEnds",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithRelationInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantOrderByRelationAggregateInput_1.ContestantOrderByRelationAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantOrderByRelationAggregateInput_1.ContestantOrderByRelationAggregateInput
    ),
  ],
  EventOrderByWithRelationInput.prototype,
  "contestants",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserOrderByWithRelationInput_1.UserOrderByWithRelationInput
    ),
  ],
  EventOrderByWithRelationInput.prototype,
  "user",
  void 0
);
EventOrderByWithRelationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventOrderByWithRelationInput", {
      isAbstract: true,
    }),
  ],
  EventOrderByWithRelationInput
);
exports.EventOrderByWithRelationInput = EventOrderByWithRelationInput;
