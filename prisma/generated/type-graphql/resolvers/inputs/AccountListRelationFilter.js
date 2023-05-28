"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountWhereInput_1 = require("../inputs/AccountWhereInput");
let AccountListRelationFilter = class AccountListRelationFilter {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  AccountListRelationFilter.prototype,
  "every",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  AccountListRelationFilter.prototype,
  "some",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  AccountListRelationFilter.prototype,
  "none",
  void 0
);
AccountListRelationFilter = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountListRelationFilter", {
      isAbstract: true,
    }),
  ],
  AccountListRelationFilter
);
exports.AccountListRelationFilter = AccountListRelationFilter;
