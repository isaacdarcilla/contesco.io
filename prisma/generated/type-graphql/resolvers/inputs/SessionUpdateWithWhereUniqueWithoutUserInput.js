"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUpdateWithoutUserInput_1 = require("../inputs/SessionUpdateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateWithWhereUniqueWithoutUserInput = class SessionUpdateWithWhereUniqueWithoutUserInput {};
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
  SessionUpdateWithWhereUniqueWithoutUserInput.prototype,
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
  SessionUpdateWithWhereUniqueWithoutUserInput.prototype,
  "data",
  void 0
);
SessionUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionUpdateWithWhereUniqueWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  SessionUpdateWithWhereUniqueWithoutUserInput
);
exports.SessionUpdateWithWhereUniqueWithoutUserInput =
  SessionUpdateWithWhereUniqueWithoutUserInput;
