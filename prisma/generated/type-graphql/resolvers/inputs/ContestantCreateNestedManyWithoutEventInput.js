"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateNestedManyWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateManyEventInputEnvelope_1 = require("../inputs/ContestantCreateManyEventInputEnvelope");
const ContestantCreateOrConnectWithoutEventInput_1 = require("../inputs/ContestantCreateOrConnectWithoutEventInput");
const ContestantCreateWithoutEventInput_1 = require("../inputs/ContestantCreateWithoutEventInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantCreateNestedManyWithoutEventInput = class ContestantCreateNestedManyWithoutEventInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateWithoutEventInput_1.ContestantCreateWithoutEventInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantCreateNestedManyWithoutEventInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateOrConnectWithoutEventInput_1.ContestantCreateOrConnectWithoutEventInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantCreateNestedManyWithoutEventInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateManyEventInputEnvelope_1.ContestantCreateManyEventInputEnvelope,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateManyEventInputEnvelope_1.ContestantCreateManyEventInputEnvelope
    ),
  ],
  ContestantCreateNestedManyWithoutEventInput.prototype,
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
  ContestantCreateNestedManyWithoutEventInput.prototype,
  "connect",
  void 0
);
ContestantCreateNestedManyWithoutEventInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateNestedManyWithoutEventInput", {
      isAbstract: true,
    }),
  ],
  ContestantCreateNestedManyWithoutEventInput
);
exports.ContestantCreateNestedManyWithoutEventInput =
  ContestantCreateNestedManyWithoutEventInput;
