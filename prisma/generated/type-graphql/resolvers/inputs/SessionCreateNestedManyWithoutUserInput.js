"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateManyUserInputEnvelope_1 = require("../inputs/SessionCreateManyUserInputEnvelope");
const SessionCreateOrConnectWithoutUserInput_1 = require("../inputs/SessionCreateOrConnectWithoutUserInput");
const SessionCreateWithoutUserInput_1 = require("../inputs/SessionCreateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateNestedManyWithoutUserInput = class SessionCreateNestedManyWithoutUserInput {};
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
  SessionCreateNestedManyWithoutUserInput.prototype,
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
  SessionCreateNestedManyWithoutUserInput.prototype,
  "connectOrCreate",
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
  SessionCreateNestedManyWithoutUserInput.prototype,
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
  SessionCreateNestedManyWithoutUserInput.prototype,
  "connect",
  void 0
);
SessionCreateNestedManyWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionCreateNestedManyWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  SessionCreateNestedManyWithoutUserInput
);
exports.SessionCreateNestedManyWithoutUserInput =
  SessionCreateNestedManyWithoutUserInput;
