"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCountOrderByAggregateInput_1 = require("../inputs/SessionCountOrderByAggregateInput");
const SessionMaxOrderByAggregateInput_1 = require("../inputs/SessionMaxOrderByAggregateInput");
const SessionMinOrderByAggregateInput_1 = require("../inputs/SessionMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SessionOrderByWithAggregationInput = class SessionOrderByWithAggregationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionOrderByWithAggregationInput.prototype,
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
  SessionOrderByWithAggregationInput.prototype,
  "sessionToken",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionOrderByWithAggregationInput.prototype,
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
  SessionOrderByWithAggregationInput.prototype,
  "expires",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionCountOrderByAggregateInput_1.SessionCountOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionCountOrderByAggregateInput_1.SessionCountOrderByAggregateInput
    ),
  ],
  SessionOrderByWithAggregationInput.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionMaxOrderByAggregateInput_1.SessionMaxOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionMaxOrderByAggregateInput_1.SessionMaxOrderByAggregateInput
    ),
  ],
  SessionOrderByWithAggregationInput.prototype,
  "_max",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionMinOrderByAggregateInput_1.SessionMinOrderByAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionMinOrderByAggregateInput_1.SessionMinOrderByAggregateInput
    ),
  ],
  SessionOrderByWithAggregationInput.prototype,
  "_min",
  void 0
);
SessionOrderByWithAggregationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionOrderByWithAggregationInput", {
      isAbstract: true,
    }),
  ],
  SessionOrderByWithAggregationInput
);
exports.SessionOrderByWithAggregationInput = SessionOrderByWithAggregationInput;
