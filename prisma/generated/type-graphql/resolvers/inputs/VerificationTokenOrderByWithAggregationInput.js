"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenCountOrderByAggregateInput_1 = require("../inputs/VerificationTokenCountOrderByAggregateInput");
const VerificationTokenMaxOrderByAggregateInput_1 = require("../inputs/VerificationTokenMaxOrderByAggregateInput");
const VerificationTokenMinOrderByAggregateInput_1 = require("../inputs/VerificationTokenMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VerificationTokenOrderByWithAggregationInput = class VerificationTokenOrderByWithAggregationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenOrderByWithAggregationInput.prototype,
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
  VerificationTokenOrderByWithAggregationInput.prototype,
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
  VerificationTokenOrderByWithAggregationInput.prototype,
  "expires",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenCountOrderByAggregateInput_1.VerificationTokenCountOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenCountOrderByAggregateInput_1.VerificationTokenCountOrderByAggregateInput
    ),
  ],
  VerificationTokenOrderByWithAggregationInput.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenMaxOrderByAggregateInput_1.VerificationTokenMaxOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenMaxOrderByAggregateInput_1.VerificationTokenMaxOrderByAggregateInput
    ),
  ],
  VerificationTokenOrderByWithAggregationInput.prototype,
  "_max",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenMinOrderByAggregateInput_1.VerificationTokenMinOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenMinOrderByAggregateInput_1.VerificationTokenMinOrderByAggregateInput
    ),
  ],
  VerificationTokenOrderByWithAggregationInput.prototype,
  "_min",
  void 0
);
VerificationTokenOrderByWithAggregationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenOrderByWithAggregationInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenOrderByWithAggregationInput
);
exports.VerificationTokenOrderByWithAggregationInput =
  VerificationTokenOrderByWithAggregationInput;
