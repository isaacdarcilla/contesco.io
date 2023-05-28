"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantAvgOrderByAggregateInput_1 = require("../inputs/ContestantAvgOrderByAggregateInput");
const ContestantCountOrderByAggregateInput_1 = require("../inputs/ContestantCountOrderByAggregateInput");
const ContestantMaxOrderByAggregateInput_1 = require("../inputs/ContestantMaxOrderByAggregateInput");
const ContestantMinOrderByAggregateInput_1 = require("../inputs/ContestantMinOrderByAggregateInput");
const ContestantSumOrderByAggregateInput_1 = require("../inputs/ContestantSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ContestantOrderByWithAggregationInput = class ContestantOrderByWithAggregationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
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
  ContestantOrderByWithAggregationInput.prototype,
  "eventId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
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
  ContestantOrderByWithAggregationInput.prototype,
  "firstName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "middleName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "lastName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "gender",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "age",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "nationality",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "birthDate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "phoneNumber",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "email",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "photo",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCountOrderByAggregateInput_1.ContestantCountOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCountOrderByAggregateInput_1.ContestantCountOrderByAggregateInput
    ),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantAvgOrderByAggregateInput_1.ContestantAvgOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantAvgOrderByAggregateInput_1.ContestantAvgOrderByAggregateInput
    ),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "_avg",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantMaxOrderByAggregateInput_1.ContestantMaxOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantMaxOrderByAggregateInput_1.ContestantMaxOrderByAggregateInput
    ),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "_max",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantMinOrderByAggregateInput_1.ContestantMinOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantMinOrderByAggregateInput_1.ContestantMinOrderByAggregateInput
    ),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantSumOrderByAggregateInput_1.ContestantSumOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantSumOrderByAggregateInput_1.ContestantSumOrderByAggregateInput
    ),
  ],
  ContestantOrderByWithAggregationInput.prototype,
  "_sum",
  void 0
);
ContestantOrderByWithAggregationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantOrderByWithAggregationInput", {
      isAbstract: true,
    }),
  ],
  ContestantOrderByWithAggregationInput
);
exports.ContestantOrderByWithAggregationInput =
  ContestantOrderByWithAggregationInput;
