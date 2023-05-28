"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateManyUserInputEnvelope_1 = require("../inputs/ContestantCreateManyUserInputEnvelope");
const ContestantCreateOrConnectWithoutUserInput_1 = require("../inputs/ContestantCreateOrConnectWithoutUserInput");
const ContestantCreateWithoutUserInput_1 = require("../inputs/ContestantCreateWithoutUserInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantCreateNestedManyWithoutUserInput = class ContestantCreateNestedManyWithoutUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateWithoutUserInput_1.ContestantCreateWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantCreateNestedManyWithoutUserInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateOrConnectWithoutUserInput_1.ContestantCreateOrConnectWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantCreateNestedManyWithoutUserInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateManyUserInputEnvelope_1.ContestantCreateManyUserInputEnvelope,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateManyUserInputEnvelope_1.ContestantCreateManyUserInputEnvelope
    ),
  ],
  ContestantCreateNestedManyWithoutUserInput.prototype,
  "createMany",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantWhereUniqueInput_1.ContestantWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantCreateNestedManyWithoutUserInput.prototype,
  "connect",
  void 0
);
ContestantCreateNestedManyWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateNestedManyWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  ContestantCreateNestedManyWithoutUserInput
);
exports.ContestantCreateNestedManyWithoutUserInput =
  ContestantCreateNestedManyWithoutUserInput;
