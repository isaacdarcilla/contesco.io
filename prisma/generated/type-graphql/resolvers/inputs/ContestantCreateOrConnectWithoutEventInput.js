"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateOrConnectWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateWithoutEventInput_1 = require("../inputs/ContestantCreateWithoutEventInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantCreateOrConnectWithoutEventInput = class ContestantCreateOrConnectWithoutEventInput {};
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
  ContestantCreateOrConnectWithoutEventInput.prototype,
  "where",
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
  ContestantCreateOrConnectWithoutEventInput.prototype,
  "create",
  void 0
);
ContestantCreateOrConnectWithoutEventInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateOrConnectWithoutEventInput", {
      isAbstract: true,
    }),
  ],
  ContestantCreateOrConnectWithoutEventInput
);
exports.ContestantCreateOrConnectWithoutEventInput =
  ContestantCreateOrConnectWithoutEventInput;
