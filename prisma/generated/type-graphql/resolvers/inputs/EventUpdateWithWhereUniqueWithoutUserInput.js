"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateWithoutUserInput_1 = require("../inputs/EventUpdateWithoutUserInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateWithWhereUniqueWithoutUserInput = class EventUpdateWithWhereUniqueWithoutUserInput {};
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
  EventUpdateWithWhereUniqueWithoutUserInput.prototype,
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
  EventUpdateWithWhereUniqueWithoutUserInput.prototype,
  "data",
  void 0
);
EventUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventUpdateWithWhereUniqueWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  EventUpdateWithWhereUniqueWithoutUserInput
);
exports.EventUpdateWithWhereUniqueWithoutUserInput =
  EventUpdateWithWhereUniqueWithoutUserInput;
