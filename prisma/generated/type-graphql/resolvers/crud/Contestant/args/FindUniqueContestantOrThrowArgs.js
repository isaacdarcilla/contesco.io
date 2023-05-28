"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueContestantOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantWhereUniqueInput_1 = require("../../../inputs/ContestantWhereUniqueInput");
let FindUniqueContestantOrThrowArgs = class FindUniqueContestantOrThrowArgs {};
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
  FindUniqueContestantOrThrowArgs.prototype,
  "where",
  void 0
);
FindUniqueContestantOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindUniqueContestantOrThrowArgs
);
exports.FindUniqueContestantOrThrowArgs = FindUniqueContestantOrThrowArgs;
