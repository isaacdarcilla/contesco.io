"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateManyUserInputEnvelope_1 = require("../inputs/EventCreateManyUserInputEnvelope");
const EventCreateOrConnectWithoutUserInput_1 = require("../inputs/EventCreateOrConnectWithoutUserInput");
const EventCreateWithoutUserInput_1 = require("../inputs/EventCreateWithoutUserInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateNestedManyWithoutUserInput = class EventCreateNestedManyWithoutUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [EventCreateWithoutUserInput_1.EventCreateWithoutUserInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventCreateNestedManyWithoutUserInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        EventCreateOrConnectWithoutUserInput_1.EventCreateOrConnectWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventCreateNestedManyWithoutUserInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventCreateManyUserInputEnvelope_1.EventCreateManyUserInputEnvelope,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventCreateManyUserInputEnvelope_1.EventCreateManyUserInputEnvelope
    ),
  ],
  EventCreateNestedManyWithoutUserInput.prototype,
  "createMany",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [EventWhereUniqueInput_1.EventWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventCreateNestedManyWithoutUserInput.prototype,
  "connect",
  void 0
);
EventCreateNestedManyWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventCreateNestedManyWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  EventCreateNestedManyWithoutUserInput
);
exports.EventCreateNestedManyWithoutUserInput =
  EventCreateNestedManyWithoutUserInput;
