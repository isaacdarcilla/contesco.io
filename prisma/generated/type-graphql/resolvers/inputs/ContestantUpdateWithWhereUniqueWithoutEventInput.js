"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpdateWithWhereUniqueWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantUpdateWithoutEventInput_1 = require("../inputs/ContestantUpdateWithoutEventInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantUpdateWithWhereUniqueWithoutEventInput = class ContestantUpdateWithWhereUniqueWithoutEventInput {};
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
  ContestantUpdateWithWhereUniqueWithoutEventInput.prototype,
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
  ContestantUpdateWithWhereUniqueWithoutEventInput.prototype,
  "data",
  void 0
);
ContestantUpdateWithWhereUniqueWithoutEventInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpdateWithWhereUniqueWithoutEventInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpdateWithWhereUniqueWithoutEventInput
);
exports.ContestantUpdateWithWhereUniqueWithoutEventInput =
  ContestantUpdateWithWhereUniqueWithoutEventInput;
