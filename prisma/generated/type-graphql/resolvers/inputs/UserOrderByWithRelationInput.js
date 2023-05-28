"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const ContestantOrderByRelationAggregateInput_1 = require("../inputs/ContestantOrderByRelationAggregateInput");
const EventOrderByRelationAggregateInput_1 = require("../inputs/EventOrderByRelationAggregateInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserOrderByWithRelationInput.prototype,
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
  UserOrderByWithRelationInput.prototype,
  "name",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserOrderByWithRelationInput.prototype,
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
  UserOrderByWithRelationInput.prototype,
  "emailVerified",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserOrderByWithRelationInput.prototype,
  "image",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserOrderByWithRelationInput.prototype,
  "role",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  UserOrderByWithRelationInput.prototype,
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
  UserOrderByWithRelationInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput
    ),
  ],
  UserOrderByWithRelationInput.prototype,
  "accounts",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput
    ),
  ],
  UserOrderByWithRelationInput.prototype,
  "sessions",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EventOrderByRelationAggregateInput_1.EventOrderByRelationAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventOrderByRelationAggregateInput_1.EventOrderByRelationAggregateInput
    ),
  ],
  UserOrderByWithRelationInput.prototype,
  "events",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantOrderByRelationAggregateInput_1.ContestantOrderByRelationAggregateInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantOrderByRelationAggregateInput_1.ContestantOrderByRelationAggregateInput
    ),
  ],
  UserOrderByWithRelationInput.prototype,
  "Contestant",
  void 0
);
UserOrderByWithRelationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
      isAbstract: true,
    }),
  ],
  UserOrderByWithRelationInput
);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
