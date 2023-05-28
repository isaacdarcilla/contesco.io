"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventListRelationFilter = class EventListRelationFilter {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  EventListRelationFilter.prototype,
  "every",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  EventListRelationFilter.prototype,
  "some",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  EventListRelationFilter.prototype,
  "none",
  void 0
);
EventListRelationFilter = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventListRelationFilter", {
      isAbstract: true,
    }),
  ],
  EventListRelationFilter
);
exports.EventListRelationFilter = EventListRelationFilter;
