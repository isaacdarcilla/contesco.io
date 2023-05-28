"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateInput_1 = require("../../../inputs/ContestantCreateInput");
const ContestantUpdateInput_1 = require("../../../inputs/ContestantUpdateInput");
const ContestantWhereUniqueInput_1 = require("../../../inputs/ContestantWhereUniqueInput");
let UpsertOneContestantArgs = class UpsertOneContestantArgs {};
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
  UpsertOneContestantArgs.prototype,
  "where",
  void 0
);
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
  UpsertOneContestantArgs.prototype,
  "create",
  void 0
);
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
  UpsertOneContestantArgs.prototype,
  "update",
  void 0
);
UpsertOneContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpsertOneContestantArgs
);
exports.UpsertOneContestantArgs = UpsertOneContestantArgs;
