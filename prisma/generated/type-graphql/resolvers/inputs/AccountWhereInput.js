"use strict";
var AccountWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AccountWhereInput = (AccountWhereInput_1 = class AccountWhereInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountWhereInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountWhereInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountWhereInput.prototype,
  "NOT",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  AccountWhereInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  AccountWhereInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  AccountWhereInput.prototype,
  "type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  AccountWhereInput.prototype,
  "provider",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  AccountWhereInput.prototype,
  "providerAccountId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  AccountWhereInput.prototype,
  "refresh_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  AccountWhereInput.prototype,
  "access_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => IntNullableFilter_1.IntNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter),
  ],
  AccountWhereInput.prototype,
  "expires_at",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  AccountWhereInput.prototype,
  "token_type",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  AccountWhereInput.prototype,
  "scope",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  AccountWhereInput.prototype,
  "id_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  AccountWhereInput.prototype,
  "session_state",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRelationFilter_1.UserRelationFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter),
  ],
  AccountWhereInput.prototype,
  "user",
  void 0
);
AccountWhereInput = AccountWhereInput_1 = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountWhereInput", {
      isAbstract: true,
    }),
  ],
  AccountWhereInput
);
exports.AccountWhereInput = AccountWhereInput;
