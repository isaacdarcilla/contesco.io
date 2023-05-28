"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCountOrderByAggregateInput_1 = require("../inputs/EventCountOrderByAggregateInput");
const EventMaxOrderByAggregateInput_1 = require("../inputs/EventMaxOrderByAggregateInput");
const EventMinOrderByAggregateInput_1 = require("../inputs/EventMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EventOrderByWithAggregationInput = class EventOrderByWithAggregationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
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
  EventOrderByWithAggregationInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventCountOrderByAggregateInput_1.EventCountOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCountOrderByAggregateInput_1.EventCountOrderByAggregateInput
    ),
  ],
  EventOrderByWithAggregationInput.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventMaxOrderByAggregateInput_1.EventMaxOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventMaxOrderByAggregateInput_1.EventMaxOrderByAggregateInput
    ),
  ],
  EventOrderByWithAggregationInput.prototype,
  "_max",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventMinOrderByAggregateInput_1.EventMinOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventMinOrderByAggregateInput_1.EventMinOrderByAggregateInput
    ),
  ],
  EventOrderByWithAggregationInput.prototype,
  "_min",
  void 0
);
EventOrderByWithAggregationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventOrderByWithAggregationInput", {
      isAbstract: true,
    }),
  ],
  EventOrderByWithAggregationInput
);
exports.EventOrderByWithAggregationInput = EventOrderByWithAggregationInput;
