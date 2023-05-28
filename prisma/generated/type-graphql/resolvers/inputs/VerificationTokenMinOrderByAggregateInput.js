"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VerificationTokenMinOrderByAggregateInput = class VerificationTokenMinOrderByAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenMinOrderByAggregateInput.prototype,
  "identifier",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenMinOrderByAggregateInput.prototype,
  "token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenMinOrderByAggregateInput.prototype,
  "expires",
  void 0
);
VerificationTokenMinOrderByAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenMinOrderByAggregateInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenMinOrderByAggregateInput
);
exports.VerificationTokenMinOrderByAggregateInput =
  VerificationTokenMinOrderByAggregateInput;
