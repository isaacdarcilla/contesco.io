"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantWhereUniqueInput_1 = require("../../../inputs/ContestantWhereUniqueInput");
let FindUniqueContestantArgs = class FindUniqueContestantArgs {};
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
  FindUniqueContestantArgs.prototype,
  "where",
  void 0
);
FindUniqueContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindUniqueContestantArgs
);
exports.FindUniqueContestantArgs = FindUniqueContestantArgs;
