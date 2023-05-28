"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AccountCountAggregate = class AccountCountAggregate {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "provider",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "providerAccountId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "refresh_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "access_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "expires_at",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "token_type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "scope",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "id_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "session_state",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AccountCountAggregate.prototype,
  "_all",
  void 0
);
AccountCountAggregate = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("AccountCountAggregate", {
      isAbstract: true,
    }),
  ],
  AccountCountAggregate
);
exports.AccountCountAggregate = AccountCountAggregate;
