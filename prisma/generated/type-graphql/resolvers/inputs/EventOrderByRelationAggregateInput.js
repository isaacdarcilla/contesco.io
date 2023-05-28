"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EventOrderByRelationAggregateInput = class EventOrderByRelationAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventOrderByRelationAggregateInput.prototype,
  "_count",
  void 0
);
EventOrderByRelationAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventOrderByRelationAggregateInput", {
      isAbstract: true,
    }),
  ],
  EventOrderByRelationAggregateInput
);
exports.EventOrderByRelationAggregateInput = EventOrderByRelationAggregateInput;
