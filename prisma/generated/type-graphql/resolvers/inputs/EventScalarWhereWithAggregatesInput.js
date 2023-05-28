"use strict";
var EventScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let EventScalarWhereWithAggregatesInput =
  (EventScalarWhereWithAggregatesInput_1 = class EventScalarWhereWithAggregatesInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [EventScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [EventScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [EventScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "NOT",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "name",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "description",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "organizer",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "category",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "tags",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "banner",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "slug",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "eventStarts",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "eventEnds",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter
    ),
  ],
  EventScalarWhereWithAggregatesInput.prototype,
  "updatedAt",
  void 0
);
EventScalarWhereWithAggregatesInput = EventScalarWhereWithAggregatesInput_1 =
  tslib_1.__decorate(
    [
      TypeGraphQL.InputType("EventScalarWhereWithAggregatesInput", {
        isAbstract: true,
      }),
    ],
    EventScalarWhereWithAggregatesInput
  );
exports.EventScalarWhereWithAggregatesInput =
  EventScalarWhereWithAggregatesInput;
