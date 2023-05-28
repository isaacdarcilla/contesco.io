"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateWithoutUserInput_1 = require("../inputs/ContestantCreateWithoutUserInput");
const ContestantUpdateWithoutUserInput_1 = require("../inputs/ContestantUpdateWithoutUserInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantUpsertWithWhereUniqueWithoutUserInput = class ContestantUpsertWithWhereUniqueWithoutUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantWhereUniqueInput_1.ContestantWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantWhereUniqueInput_1.ContestantWhereUniqueInput
    ),
  ],
  ContestantUpsertWithWhereUniqueWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantUpdateWithoutUserInput_1.ContestantUpdateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantUpdateWithoutUserInput_1.ContestantUpdateWithoutUserInput
    ),
  ],
  ContestantUpsertWithWhereUniqueWithoutUserInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateWithoutUserInput_1.ContestantCreateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateWithoutUserInput_1.ContestantCreateWithoutUserInput
    ),
  ],
  ContestantUpsertWithWhereUniqueWithoutUserInput.prototype,
  "create",
  void 0
);
ContestantUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpsertWithWhereUniqueWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpsertWithWhereUniqueWithoutUserInput
);
exports.ContestantUpsertWithWhereUniqueWithoutUserInput =
  ContestantUpsertWithWhereUniqueWithoutUserInput;
