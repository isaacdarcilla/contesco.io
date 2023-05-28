"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateManyUserInputEnvelope_1 = require("../inputs/EventCreateManyUserInputEnvelope");
const EventCreateOrConnectWithoutUserInput_1 = require("../inputs/EventCreateOrConnectWithoutUserInput");
const EventCreateWithoutUserInput_1 = require("../inputs/EventCreateWithoutUserInput");
const EventScalarWhereInput_1 = require("../inputs/EventScalarWhereInput");
const EventUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/EventUpdateManyWithWhereWithoutUserInput");
const EventUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/EventUpdateWithWhereUniqueWithoutUserInput");
const EventUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/EventUpsertWithWhereUniqueWithoutUserInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateManyWithoutUserNestedInput = class EventUpdateManyWithoutUserNestedInput {};
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
  EventUpdateManyWithoutUserNestedInput.prototype,
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
  EventUpdateManyWithoutUserNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        EventUpsertWithWhereUniqueWithoutUserInput_1.EventUpsertWithWhereUniqueWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventUpdateManyWithoutUserNestedInput.prototype,
  "upsert",
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
  EventUpdateManyWithoutUserNestedInput.prototype,
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
  EventUpdateManyWithoutUserNestedInput.prototype,
  "set",
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
  EventUpdateManyWithoutUserNestedInput.prototype,
  "disconnect",
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
  EventUpdateManyWithoutUserNestedInput.prototype,
  "delete",
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
  EventUpdateManyWithoutUserNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        EventUpdateWithWhereUniqueWithoutUserInput_1.EventUpdateWithWhereUniqueWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventUpdateManyWithoutUserNestedInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        EventUpdateManyWithWhereWithoutUserInput_1.EventUpdateManyWithWhereWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventUpdateManyWithoutUserNestedInput.prototype,
  "updateMany",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [EventScalarWhereInput_1.EventScalarWhereInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  EventUpdateManyWithoutUserNestedInput.prototype,
  "deleteMany",
  void 0
);
EventUpdateManyWithoutUserNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventUpdateManyWithoutUserNestedInput", {
      isAbstract: true,
    }),
  ],
  EventUpdateManyWithoutUserNestedInput
);
exports.EventUpdateManyWithoutUserNestedInput =
  EventUpdateManyWithoutUserNestedInput;
