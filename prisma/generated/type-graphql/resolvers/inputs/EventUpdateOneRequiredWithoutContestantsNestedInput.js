"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateOneRequiredWithoutContestantsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutContestantsInput_1 = require("../inputs/EventCreateOrConnectWithoutContestantsInput");
const EventCreateWithoutContestantsInput_1 = require("../inputs/EventCreateWithoutContestantsInput");
const EventUpdateWithoutContestantsInput_1 = require("../inputs/EventUpdateWithoutContestantsInput");
const EventUpsertWithoutContestantsInput_1 = require("../inputs/EventUpsertWithoutContestantsInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateOneRequiredWithoutContestantsNestedInput = class EventUpdateOneRequiredWithoutContestantsNestedInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventCreateWithoutContestantsInput_1.EventCreateWithoutContestantsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCreateWithoutContestantsInput_1.EventCreateWithoutContestantsInput
    ),
  ],
  EventUpdateOneRequiredWithoutContestantsNestedInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventCreateOrConnectWithoutContestantsInput_1.EventCreateOrConnectWithoutContestantsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCreateOrConnectWithoutContestantsInput_1.EventCreateOrConnectWithoutContestantsInput
    ),
  ],
  EventUpdateOneRequiredWithoutContestantsNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventUpsertWithoutContestantsInput_1.EventUpsertWithoutContestantsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventUpsertWithoutContestantsInput_1.EventUpsertWithoutContestantsInput
    ),
  ],
  EventUpdateOneRequiredWithoutContestantsNestedInput.prototype,
  "upsert",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventWhereUniqueInput_1.EventWhereUniqueInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventWhereUniqueInput_1.EventWhereUniqueInput
    ),
  ],
  EventUpdateOneRequiredWithoutContestantsNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventUpdateWithoutContestantsInput_1.EventUpdateWithoutContestantsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventUpdateWithoutContestantsInput_1.EventUpdateWithoutContestantsInput
    ),
  ],
  EventUpdateOneRequiredWithoutContestantsNestedInput.prototype,
  "update",
  void 0
);
EventUpdateOneRequiredWithoutContestantsNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType(
      "EventUpdateOneRequiredWithoutContestantsNestedInput",
      {
        isAbstract: true,
      }
    ),
  ],
  EventUpdateOneRequiredWithoutContestantsNestedInput
);
exports.EventUpdateOneRequiredWithoutContestantsNestedInput =
  EventUpdateOneRequiredWithoutContestantsNestedInput;
