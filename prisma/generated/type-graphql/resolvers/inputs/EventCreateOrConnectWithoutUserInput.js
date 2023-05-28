"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutUserInput_1 = require("../inputs/EventCreateWithoutUserInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateOrConnectWithoutUserInput = class EventCreateOrConnectWithoutUserInput {};
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
  EventCreateOrConnectWithoutUserInput.prototype,
  "where",
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
  EventCreateOrConnectWithoutUserInput.prototype,
  "create",
  void 0
);
EventCreateOrConnectWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventCreateOrConnectWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  EventCreateOrConnectWithoutUserInput
);
exports.EventCreateOrConnectWithoutUserInput =
  EventCreateOrConnectWithoutUserInput;
