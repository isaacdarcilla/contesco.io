"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpdateManyWithWhereWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantScalarWhereInput_1 = require("../inputs/ContestantScalarWhereInput");
const ContestantUpdateManyMutationInput_1 = require("../inputs/ContestantUpdateManyMutationInput");
let ContestantUpdateManyWithWhereWithoutEventInput = class ContestantUpdateManyWithWhereWithoutEventInput {};
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
  ContestantUpdateManyWithWhereWithoutEventInput.prototype,
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
  ContestantUpdateManyWithWhereWithoutEventInput.prototype,
  "data",
  void 0
);
ContestantUpdateManyWithWhereWithoutEventInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpdateManyWithWhereWithoutEventInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpdateManyWithWhereWithoutEventInput
);
exports.ContestantUpdateManyWithWhereWithoutEventInput =
  ContestantUpdateManyWithWhereWithoutEventInput;
