"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateWithoutUserInput_1 = require("../inputs/ContestantCreateWithoutUserInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantCreateOrConnectWithoutUserInput = class ContestantCreateOrConnectWithoutUserInput {};
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
  ContestantCreateOrConnectWithoutUserInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateWithoutUserInput_1.ContestantCreateWithoutUserInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateWithoutUserInput_1.ContestantCreateWithoutUserInput
    ),
  ],
  ContestantCreateOrConnectWithoutUserInput.prototype,
  "create",
  void 0
);
ContestantCreateOrConnectWithoutUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantCreateOrConnectWithoutUserInput", {
      isAbstract: true,
    }),
  ],
  ContestantCreateOrConnectWithoutUserInput
);
exports.ContestantCreateOrConnectWithoutUserInput =
  ContestantCreateOrConnectWithoutUserInput;
