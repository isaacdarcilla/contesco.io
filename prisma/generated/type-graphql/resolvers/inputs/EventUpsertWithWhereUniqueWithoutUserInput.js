"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutUserInput_1 = require("../inputs/EventCreateWithoutUserInput");
const EventUpdateWithoutUserInput_1 = require("../inputs/EventUpdateWithoutUserInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpsertWithWhereUniqueWithoutUserInput = class EventUpsertWithWhereUniqueWithoutUserInput {};
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
  EventUpsertWithWhereUniqueWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventUpdateWithoutUserInput_1.EventUpdateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventUpdateWithoutUserInput_1.EventUpdateWithoutUserInput
    ),
  ],
  EventUpsertWithWhereUniqueWithoutUserInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventCreateWithoutUserInput_1.EventCreateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCreateWithoutUserInput_1.EventCreateWithoutUserInput
    ),
  ],
  EventUpsertWithWhereUniqueWithoutUserInput.prototype,
  "create",
  void 0
);
EventUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventUpsertWithWhereUniqueWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  EventUpsertWithWhereUniqueWithoutUserInput
);
exports.EventUpsertWithWhereUniqueWithoutUserInput =
  EventUpsertWithWhereUniqueWithoutUserInput;
