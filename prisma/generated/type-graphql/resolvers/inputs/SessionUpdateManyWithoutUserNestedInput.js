"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateManyUserInputEnvelope_1 = require("../inputs/SessionCreateManyUserInputEnvelope");
const SessionCreateOrConnectWithoutUserInput_1 = require("../inputs/SessionCreateOrConnectWithoutUserInput");
const SessionCreateWithoutUserInput_1 = require("../inputs/SessionCreateWithoutUserInput");
const SessionScalarWhereInput_1 = require("../inputs/SessionScalarWhereInput");
const SessionUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithWhereWithoutUserInput");
const SessionUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/SessionUpdateWithWhereUniqueWithoutUserInput");
const SessionUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/SessionUpsertWithWhereUniqueWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateManyWithoutUserNestedInput = class SessionUpdateManyWithoutUserNestedInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        SessionCreateWithoutUserInput_1.SessionCreateWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        SessionCreateOrConnectWithoutUserInput_1.SessionCreateOrConnectWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        SessionUpsertWithWhereUniqueWithoutUserInput_1.SessionUpsertWithWhereUniqueWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "upsert",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope
    ),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "createMany",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [SessionWhereUniqueInput_1.SessionWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "set",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [SessionWhereUniqueInput_1.SessionWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "disconnect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [SessionWhereUniqueInput_1.SessionWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "delete",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [SessionWhereUniqueInput_1.SessionWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        SessionUpdateWithWhereUniqueWithoutUserInput_1.SessionUpdateWithWhereUniqueWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        SessionUpdateManyWithWhereWithoutUserInput_1.SessionUpdateManyWithWhereWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "updateMany",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [SessionScalarWhereInput_1.SessionScalarWhereInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionUpdateManyWithoutUserNestedInput.prototype,
  "deleteMany",
  void 0
);
SessionUpdateManyWithoutUserNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionUpdateManyWithoutUserNestedInput", {
      isAbstract: true,
    }),
  ],
  SessionUpdateManyWithoutUserNestedInput
);
exports.SessionUpdateManyWithoutUserNestedInput =
  SessionUpdateManyWithoutUserNestedInput;
