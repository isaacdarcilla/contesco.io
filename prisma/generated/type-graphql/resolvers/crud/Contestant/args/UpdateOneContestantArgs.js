"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantUpdateInput_1 = require("../../../inputs/ContestantUpdateInput");
const ContestantWhereUniqueInput_1 = require("../../../inputs/ContestantWhereUniqueInput");
let UpdateOneContestantArgs = class UpdateOneContestantArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantUpdateInput_1.ContestantUpdateInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantUpdateInput_1.ContestantUpdateInput
    ),
  ],
  UpdateOneContestantArgs.prototype,
  "data",
  void 0
);
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
  UpdateOneContestantArgs.prototype,
  "where",
  void 0
);
UpdateOneContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateOneContestantArgs
);
exports.UpdateOneContestantArgs = UpdateOneContestantArgs;
