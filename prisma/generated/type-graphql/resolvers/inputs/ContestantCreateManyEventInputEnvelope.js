"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateManyEventInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateManyEventInput_1 = require("../inputs/ContestantCreateManyEventInput");
let ContestantCreateManyEventInputEnvelope = class ContestantCreateManyEventInputEnvelope {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateManyEventInput_1.ContestantCreateManyEventInput,
      ],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantCreateManyEventInputEnvelope.prototype,
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
  ContestantCreateManyEventInputEnvelope.prototype,
  "skipDuplicates",
  void 0
);
ContestantCreateManyEventInputEnvelope = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateManyEventInputEnvelope", {
      isAbstract: true,
    }),
  ],
  ContestantCreateManyEventInputEnvelope
);
exports.ContestantCreateManyEventInputEnvelope =
  ContestantCreateManyEventInputEnvelope;
