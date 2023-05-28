"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SessionCountOrderByAggregateInput = class SessionCountOrderByAggregateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionCountOrderByAggregateInput.prototype,
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
  SessionCountOrderByAggregateInput.prototype,
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
  SessionCountOrderByAggregateInput.prototype,
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
  SessionCountOrderByAggregateInput.prototype,
  "expires",
  void 0
);
SessionCountOrderByAggregateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionCountOrderByAggregateInput", {
      isAbstract: true,
    }),
  ],
  SessionCountOrderByAggregateInput
);
exports.SessionCountOrderByAggregateInput = SessionCountOrderByAggregateInput;
