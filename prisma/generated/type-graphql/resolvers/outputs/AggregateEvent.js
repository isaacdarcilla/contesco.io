"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEvent = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCountAggregate_1 = require("../outputs/EventCountAggregate");
const EventMaxAggregate_1 = require("../outputs/EventMaxAggregate");
const EventMinAggregate_1 = require("../outputs/EventMinAggregate");
let AggregateEvent = class AggregateEvent {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventCountAggregate_1.EventCountAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      EventCountAggregate_1.EventCountAggregate
    ),
  ],
  AggregateEvent.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventMinAggregate_1.EventMinAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventMinAggregate_1.EventMinAggregate),
  ],
  AggregateEvent.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventMaxAggregate_1.EventMaxAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventMaxAggregate_1.EventMaxAggregate),
  ],
  AggregateEvent.prototype,
  "_max",
  void 0
);
AggregateEvent = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("AggregateEvent", {
      isAbstract: true,
    }),
  ],
  AggregateEvent
);
exports.AggregateEvent = AggregateEvent;
