"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventOrderByWithAggregationInput_1 = require("../../../inputs/EventOrderByWithAggregationInput");
const EventScalarWhereWithAggregatesInput_1 = require("../../../inputs/EventScalarWhereWithAggregatesInput");
const EventWhereInput_1 = require("../../../inputs/EventWhereInput");
const EventScalarFieldEnum_1 = require("../../../../enums/EventScalarFieldEnum");
let GroupByEventArgs = class GroupByEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  GroupByEventArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        EventOrderByWithAggregationInput_1.EventOrderByWithAggregationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByEventArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [EventScalarFieldEnum_1.EventScalarFieldEnum],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByEventArgs.prototype,
  "by",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventScalarWhereWithAggregatesInput_1.EventScalarWhereWithAggregatesInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventScalarWhereWithAggregatesInput_1.EventScalarWhereWithAggregatesInput
    ),
  ],
  GroupByEventArgs.prototype,
  "having",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  GroupByEventArgs.prototype,
  "take",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  GroupByEventArgs.prototype,
  "skip",
  void 0
);
GroupByEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  GroupByEventArgs
);
exports.GroupByEventArgs = GroupByEventArgs;
