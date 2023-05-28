"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateNestedOneWithoutContestantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutContestantsInput_1 = require("../inputs/EventCreateOrConnectWithoutContestantsInput");
const EventCreateWithoutContestantsInput_1 = require("../inputs/EventCreateWithoutContestantsInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateNestedOneWithoutContestantsInput = class EventCreateNestedOneWithoutContestantsInput {};
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
  EventCreateNestedOneWithoutContestantsInput.prototype,
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
  EventCreateNestedOneWithoutContestantsInput.prototype,
  "connectOrCreate",
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
  EventCreateNestedOneWithoutContestantsInput.prototype,
  "connect",
  void 0
);
EventCreateNestedOneWithoutContestantsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventCreateNestedOneWithoutContestantsInput", {
      isAbstract: true,
    }),
  ],
  EventCreateNestedOneWithoutContestantsInput
);
exports.EventCreateNestedOneWithoutContestantsInput =
  EventCreateNestedOneWithoutContestantsInput;
