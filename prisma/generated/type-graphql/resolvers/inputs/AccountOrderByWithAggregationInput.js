"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountAvgOrderByAggregateInput_1 = require("../inputs/AccountAvgOrderByAggregateInput");
const AccountCountOrderByAggregateInput_1 = require("../inputs/AccountCountOrderByAggregateInput");
const AccountMaxOrderByAggregateInput_1 = require("../inputs/AccountMaxOrderByAggregateInput");
const AccountMinOrderByAggregateInput_1 = require("../inputs/AccountMinOrderByAggregateInput");
const AccountSumOrderByAggregateInput_1 = require("../inputs/AccountSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AccountOrderByWithAggregationInput = class AccountOrderByWithAggregationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "provider",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "providerAccountId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "refresh_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "access_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "expires_at",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "token_type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "scope",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "id_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "session_state",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput
    ),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountAvgOrderByAggregateInput_1.AccountAvgOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountAvgOrderByAggregateInput_1.AccountAvgOrderByAggregateInput
    ),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "_avg",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput
    ),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "_max",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput
    ),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountSumOrderByAggregateInput_1.AccountSumOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountSumOrderByAggregateInput_1.AccountSumOrderByAggregateInput
    ),
  ],
  AccountOrderByWithAggregationInput.prototype,
  "_sum",
  void 0
);
AccountOrderByWithAggregationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountOrderByWithAggregationInput", {
      isAbstract: true,
    }),
  ],
  AccountOrderByWithAggregationInput
);
exports.AccountOrderByWithAggregationInput = AccountOrderByWithAggregationInput;
