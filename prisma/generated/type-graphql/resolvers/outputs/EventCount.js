"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventCount = class EventCount {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  EventCount.prototype,
  "contestants",
  void 0
);
EventCount = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("EventCount", {
      isAbstract: true,
    }),
  ],
  EventCount
);
exports.EventCount = EventCount;
