"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateWithoutUserInput_1 = require("../inputs/SessionCreateWithoutUserInput");
const SessionUpdateWithoutUserInput_1 = require("../inputs/SessionUpdateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpsertWithWhereUniqueWithoutUserInput = class SessionUpsertWithWhereUniqueWithoutUserInput {};
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
  SessionUpsertWithWhereUniqueWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => SessionUpdateWithoutUserInput_1.SessionUpdateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionUpdateWithoutUserInput_1.SessionUpdateWithoutUserInput
    ),
  ],
  SessionUpsertWithWhereUniqueWithoutUserInput.prototype,
  "update",
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
  SessionUpsertWithWhereUniqueWithoutUserInput.prototype,
  "create",
  void 0
);
SessionUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionUpsertWithWhereUniqueWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  SessionUpsertWithWhereUniqueWithoutUserInput
);
exports.SessionUpsertWithWhereUniqueWithoutUserInput =
  SessionUpsertWithWhereUniqueWithoutUserInput;
