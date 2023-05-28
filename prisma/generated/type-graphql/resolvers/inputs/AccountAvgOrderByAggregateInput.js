"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AccountAvgOrderByAggregateInput = class AccountAvgOrderByAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountAvgOrderByAggregateInput.prototype,
  "expires_at",
  void 0
);
AccountAvgOrderByAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountAvgOrderByAggregateInput", {
      isAbstract: true,
    }),
  ],
  AccountAvgOrderByAggregateInput
);
exports.AccountAvgOrderByAggregateInput = AccountAvgOrderByAggregateInput;
