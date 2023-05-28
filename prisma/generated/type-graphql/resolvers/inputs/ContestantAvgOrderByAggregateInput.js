"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ContestantAvgOrderByAggregateInput = class ContestantAvgOrderByAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantAvgOrderByAggregateInput.prototype,
  "age",
  void 0
);
ContestantAvgOrderByAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantAvgOrderByAggregateInput", {
      isAbstract: true,
    }),
  ],
  ContestantAvgOrderByAggregateInput
);
exports.ContestantAvgOrderByAggregateInput = ContestantAvgOrderByAggregateInput;
