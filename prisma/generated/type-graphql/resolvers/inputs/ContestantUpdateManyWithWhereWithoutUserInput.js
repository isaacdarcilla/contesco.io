"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantScalarWhereInput_1 = require("../inputs/ContestantScalarWhereInput");
const ContestantUpdateManyMutationInput_1 = require("../inputs/ContestantUpdateManyMutationInput");
let ContestantUpdateManyWithWhereWithoutUserInput = class ContestantUpdateManyWithWhereWithoutUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantScalarWhereInput_1.ContestantScalarWhereInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantScalarWhereInput_1.ContestantScalarWhereInput
    ),
  ],
  ContestantUpdateManyWithWhereWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantUpdateManyMutationInput_1.ContestantUpdateManyMutationInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantUpdateManyMutationInput_1.ContestantUpdateManyMutationInput
    ),
  ],
  ContestantUpdateManyWithWhereWithoutUserInput.prototype,
  "data",
  void 0
);
ContestantUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpdateManyWithWhereWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpdateManyWithWhereWithoutUserInput
);
exports.ContestantUpdateManyWithWhereWithoutUserInput =
  ContestantUpdateManyWithWhereWithoutUserInput;
