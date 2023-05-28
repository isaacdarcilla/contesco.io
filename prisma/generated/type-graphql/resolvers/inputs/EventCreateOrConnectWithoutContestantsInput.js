"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateOrConnectWithoutContestantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutContestantsInput_1 = require("../inputs/EventCreateWithoutContestantsInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateOrConnectWithoutContestantsInput = class EventCreateOrConnectWithoutContestantsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventWhereUniqueInput_1.EventWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventWhereUniqueInput_1.EventWhereUniqueInput
    ),
  ],
  EventCreateOrConnectWithoutContestantsInput.prototype,
  "where",
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
  EventCreateOrConnectWithoutContestantsInput.prototype,
  "create",
  void 0
);
EventCreateOrConnectWithoutContestantsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventCreateOrConnectWithoutContestantsInput", {
      isAbstract: true,
    }),
  ],
  EventCreateOrConnectWithoutContestantsInput
);
exports.EventCreateOrConnectWithoutContestantsInput =
  EventCreateOrConnectWithoutContestantsInput;
