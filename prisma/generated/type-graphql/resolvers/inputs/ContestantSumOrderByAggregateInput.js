"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ContestantSumOrderByAggregateInput = class ContestantSumOrderByAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantSumOrderByAggregateInput.prototype,
  "age",
  void 0
);
ContestantSumOrderByAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantSumOrderByAggregateInput", {
      isAbstract: true,
    }),
  ],
  ContestantSumOrderByAggregateInput
);
exports.ContestantSumOrderByAggregateInput = ContestantSumOrderByAggregateInput;
