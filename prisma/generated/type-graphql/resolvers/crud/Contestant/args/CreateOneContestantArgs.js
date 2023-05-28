"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateInput_1 = require("../../../inputs/ContestantCreateInput");
let CreateOneContestantArgs = class CreateOneContestantArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantCreateInput_1.ContestantCreateInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateInput_1.ContestantCreateInput
    ),
  ],
  CreateOneContestantArgs.prototype,
  "data",
  void 0
);
CreateOneContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateOneContestantArgs
);
exports.CreateOneContestantArgs = CreateOneContestantArgs;
