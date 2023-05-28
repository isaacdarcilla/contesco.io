"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountAvgAggregate_1 = require("../outputs/AccountAvgAggregate");
const AccountCountAggregate_1 = require("../outputs/AccountCountAggregate");
const AccountMaxAggregate_1 = require("../outputs/AccountMaxAggregate");
const AccountMinAggregate_1 = require("../outputs/AccountMinAggregate");
const AccountSumAggregate_1 = require("../outputs/AccountSumAggregate");
let AccountGroupBy = class AccountGroupBy {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "provider",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "providerAccountId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "refresh_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "access_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountGroupBy.prototype,
  "expires_at",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "token_type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "scope",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "id_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  AccountGroupBy.prototype,
  "session_state",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountCountAggregate_1.AccountCountAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountCountAggregate_1.AccountCountAggregate
    ),
  ],
  AccountGroupBy.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountAvgAggregate_1.AccountAvgAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      AccountAvgAggregate_1.AccountAvgAggregate
    ),
  ],
  AccountGroupBy.prototype,
  "_avg",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountSumAggregate_1.AccountSumAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      AccountSumAggregate_1.AccountSumAggregate
    ),
  ],
  AccountGroupBy.prototype,
  "_sum",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountMinAggregate_1.AccountMinAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      AccountMinAggregate_1.AccountMinAggregate
    ),
  ],
  AccountGroupBy.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountMaxAggregate_1.AccountMaxAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      AccountMaxAggregate_1.AccountMaxAggregate
    ),
  ],
  AccountGroupBy.prototype,
  "_max",
  void 0
);
AccountGroupBy = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("AccountGroupBy", {
      isAbstract: true,
    }),
  ],
  AccountGroupBy
);
exports.AccountGroupBy = AccountGroupBy;
