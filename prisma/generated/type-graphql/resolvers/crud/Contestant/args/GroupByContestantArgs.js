"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantOrderByWithAggregationInput_1 = require("../../../inputs/ContestantOrderByWithAggregationInput");
const ContestantScalarWhereWithAggregatesInput_1 = require("../../../inputs/ContestantScalarWhereWithAggregatesInput");
const ContestantWhereInput_1 = require("../../../inputs/ContestantWhereInput");
const ContestantScalarFieldEnum_1 = require("../../../../enums/ContestantScalarFieldEnum");
let GroupByContestantArgs = class GroupByContestantArgs {};
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
  GroupByContestantArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantOrderByWithAggregationInput_1.ContestantOrderByWithAggregationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByContestantArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantScalarFieldEnum_1.ContestantScalarFieldEnum],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByContestantArgs.prototype,
  "by",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantScalarWhereWithAggregatesInput_1.ContestantScalarWhereWithAggregatesInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantScalarWhereWithAggregatesInput_1.ContestantScalarWhereWithAggregatesInput
    ),
  ],
  GroupByContestantArgs.prototype,
  "having",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  GroupByContestantArgs.prototype,
  "take",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  GroupByContestantArgs.prototype,
  "skip",
  void 0
);
GroupByContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  GroupByContestantArgs
);
exports.GroupByContestantArgs = GroupByContestantArgs;
