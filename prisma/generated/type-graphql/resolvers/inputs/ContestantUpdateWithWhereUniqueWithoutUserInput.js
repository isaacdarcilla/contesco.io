"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantUpdateWithoutUserInput_1 = require("../inputs/ContestantUpdateWithoutUserInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantUpdateWithWhereUniqueWithoutUserInput = class ContestantUpdateWithWhereUniqueWithoutUserInput {};
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
  ContestantUpdateWithWhereUniqueWithoutUserInput.prototype,
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
  ContestantUpdateWithWhereUniqueWithoutUserInput.prototype,
  "data",
  void 0
);
ContestantUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpdateWithWhereUniqueWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpdateWithWhereUniqueWithoutUserInput
);
exports.ContestantUpdateWithWhereUniqueWithoutUserInput =
  ContestantUpdateWithWhereUniqueWithoutUserInput;
