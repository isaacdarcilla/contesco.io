"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantWhereInput_1 = require("../../../inputs/ContestantWhereInput");
let DeleteManyContestantArgs = class DeleteManyContestantArgs {};
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
  DeleteManyContestantArgs.prototype,
  "where",
  void 0
);
DeleteManyContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  DeleteManyContestantArgs
);
exports.DeleteManyContestantArgs = DeleteManyContestantArgs;
