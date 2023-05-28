"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantUpdateManyMutationInput_1 = require("../../../inputs/ContestantUpdateManyMutationInput");
const ContestantWhereInput_1 = require("../../../inputs/ContestantWhereInput");
let UpdateManyContestantArgs = class UpdateManyContestantArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantUpdateManyMutationInput_1.ContestantUpdateManyMutationInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantUpdateManyMutationInput_1.ContestantUpdateManyMutationInput
    ),
  ],
  UpdateManyContestantArgs.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => ContestantWhereInput_1.ContestantWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      ContestantWhereInput_1.ContestantWhereInput
    ),
  ],
  UpdateManyContestantArgs.prototype,
  "where",
  void 0
);
UpdateManyContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateManyContestantArgs
);
exports.UpdateManyContestantArgs = UpdateManyContestantArgs;
