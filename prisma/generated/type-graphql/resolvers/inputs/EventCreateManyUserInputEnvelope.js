"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateManyUserInput_1 = require("../inputs/EventCreateManyUserInput");
let EventCreateManyUserInputEnvelope = class EventCreateManyUserInputEnvelope {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [EventCreateManyUserInput_1.EventCreateManyUserInput],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventCreateManyUserInputEnvelope.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Boolean, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Boolean),
  ],
  EventCreateManyUserInputEnvelope.prototype,
  "skipDuplicates",
  void 0
);
EventCreateManyUserInputEnvelope = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventCreateManyUserInputEnvelope", {
      isAbstract: true,
    }),
  ],
  EventCreateManyUserInputEnvelope
);
exports.EventCreateManyUserInputEnvelope = EventCreateManyUserInputEnvelope;
