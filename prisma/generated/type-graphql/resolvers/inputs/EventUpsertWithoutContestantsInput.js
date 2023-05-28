"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpsertWithoutContestantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutContestantsInput_1 = require("../inputs/EventCreateWithoutContestantsInput");
const EventUpdateWithoutContestantsInput_1 = require("../inputs/EventUpdateWithoutContestantsInput");
let EventUpsertWithoutContestantsInput = class EventUpsertWithoutContestantsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventUpdateWithoutContestantsInput_1.EventUpdateWithoutContestantsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventUpdateWithoutContestantsInput_1.EventUpdateWithoutContestantsInput
    ),
  ],
  EventUpsertWithoutContestantsInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventCreateWithoutContestantsInput_1.EventCreateWithoutContestantsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCreateWithoutContestantsInput_1.EventCreateWithoutContestantsInput
    ),
  ],
  EventUpsertWithoutContestantsInput.prototype,
  "create",
  void 0
);
EventUpsertWithoutContestantsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventUpsertWithoutContestantsInput", {
      isAbstract: true,
    }),
  ],
  EventUpsertWithoutContestantsInput
);
exports.EventUpsertWithoutContestantsInput = EventUpsertWithoutContestantsInput;
