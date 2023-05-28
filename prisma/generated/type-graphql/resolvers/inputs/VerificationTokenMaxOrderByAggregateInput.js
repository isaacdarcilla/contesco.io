"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VerificationTokenMaxOrderByAggregateInput = class VerificationTokenMaxOrderByAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenMaxOrderByAggregateInput.prototype,
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
  VerificationTokenMaxOrderByAggregateInput.prototype,
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
  VerificationTokenMaxOrderByAggregateInput.prototype,
  "expires",
  void 0
);
VerificationTokenMaxOrderByAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenMaxOrderByAggregateInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenMaxOrderByAggregateInput
);
exports.VerificationTokenMaxOrderByAggregateInput =
  VerificationTokenMaxOrderByAggregateInput;
