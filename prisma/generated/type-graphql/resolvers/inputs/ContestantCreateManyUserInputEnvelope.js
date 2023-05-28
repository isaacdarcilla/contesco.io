"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateManyUserInput_1 = require("../inputs/ContestantCreateManyUserInput");
let ContestantCreateManyUserInputEnvelope = class ContestantCreateManyUserInputEnvelope {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateManyUserInput_1.ContestantCreateManyUserInput,
      ],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantCreateManyUserInputEnvelope.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Boolean, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Boolean),
  ],
  ContestantCreateManyUserInputEnvelope.prototype,
  "skipDuplicates",
  void 0
);
ContestantCreateManyUserInputEnvelope = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateManyUserInputEnvelope", {
      isAbstract: true,
    }),
  ],
  ContestantCreateManyUserInputEnvelope
);
exports.ContestantCreateManyUserInputEnvelope =
  ContestantCreateManyUserInputEnvelope;
