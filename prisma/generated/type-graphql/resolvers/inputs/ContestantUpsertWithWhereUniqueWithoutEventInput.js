"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpsertWithWhereUniqueWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateWithoutEventInput_1 = require("../inputs/ContestantCreateWithoutEventInput");
const ContestantUpdateWithoutEventInput_1 = require("../inputs/ContestantUpdateWithoutEventInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantUpsertWithWhereUniqueWithoutEventInput = class ContestantUpsertWithWhereUniqueWithoutEventInput {};
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
  ContestantUpsertWithWhereUniqueWithoutEventInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantUpdateWithoutEventInput_1.ContestantUpdateWithoutEventInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantUpdateWithoutEventInput_1.ContestantUpdateWithoutEventInput
    ),
  ],
  ContestantUpsertWithWhereUniqueWithoutEventInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateWithoutEventInput_1.ContestantCreateWithoutEventInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateWithoutEventInput_1.ContestantCreateWithoutEventInput
    ),
  ],
  ContestantUpsertWithWhereUniqueWithoutEventInput.prototype,
  "create",
  void 0
);
ContestantUpsertWithWhereUniqueWithoutEventInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpsertWithWhereUniqueWithoutEventInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpsertWithWhereUniqueWithoutEventInput
);
exports.ContestantUpsertWithWhereUniqueWithoutEventInput =
  ContestantUpsertWithWhereUniqueWithoutEventInput;
