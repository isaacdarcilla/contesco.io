"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventRelationFilter = class EventRelationFilter {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  EventRelationFilter.prototype,
  "is",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  EventRelationFilter.prototype,
  "isNot",
  void 0
);
EventRelationFilter = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventRelationFilter", {
      isAbstract: true,
    }),
  ],
  EventRelationFilter
);
exports.EventRelationFilter = EventRelationFilter;
