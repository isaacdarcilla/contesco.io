"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VerificationTokenCountOrderByAggregateInput = class VerificationTokenCountOrderByAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenCountOrderByAggregateInput.prototype,
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
  VerificationTokenCountOrderByAggregateInput.prototype,
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
  VerificationTokenCountOrderByAggregateInput.prototype,
  "expires",
  void 0
);
VerificationTokenCountOrderByAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenCountOrderByAggregateInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenCountOrderByAggregateInput
);
exports.VerificationTokenCountOrderByAggregateInput =
  VerificationTokenCountOrderByAggregateInput;
