"use strict";
var AccountScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let AccountScalarWhereInput =
  (AccountScalarWhereInput_1 = class AccountScalarWhereInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountScalarWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountScalarWhereInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountScalarWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountScalarWhereInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountScalarWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
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
  AccountScalarWhereInput.prototype,
  "session_state",
  void 0
);
AccountScalarWhereInput = AccountScalarWhereInput_1 = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountScalarWhereInput", {
      isAbstract: true,
    }),
  ],
  AccountScalarWhereInput
);
exports.AccountScalarWhereInput = AccountScalarWhereInput;
