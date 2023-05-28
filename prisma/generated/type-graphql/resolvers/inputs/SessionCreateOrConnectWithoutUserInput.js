"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateWithoutUserInput_1 = require("../inputs/SessionCreateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateOrConnectWithoutUserInput = class SessionCreateOrConnectWithoutUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => SessionWhereUniqueInput_1.SessionWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionWhereUniqueInput_1.SessionWhereUniqueInput
    ),
  ],
  SessionCreateOrConnectWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => SessionCreateWithoutUserInput_1.SessionCreateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionCreateWithoutUserInput_1.SessionCreateWithoutUserInput
    ),
  ],
  SessionCreateOrConnectWithoutUserInput.prototype,
  "create",
  void 0
);
SessionCreateOrConnectWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionCreateOrConnectWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  SessionCreateOrConnectWithoutUserInput
);
exports.SessionCreateOrConnectWithoutUserInput =
  SessionCreateOrConnectWithoutUserInput;
