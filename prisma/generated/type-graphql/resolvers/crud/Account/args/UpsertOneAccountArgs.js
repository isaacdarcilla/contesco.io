"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateInput_1 = require("../../../inputs/AccountCreateInput");
const AccountUpdateInput_1 = require("../../../inputs/AccountUpdateInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let UpsertOneAccountArgs = class UpsertOneAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountWhereUniqueInput_1.AccountWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountWhereUniqueInput_1.AccountWhereUniqueInput
    ),
  ],
  UpsertOneAccountArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountCreateInput_1.AccountCreateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", AccountCreateInput_1.AccountCreateInput),
  ],
  UpsertOneAccountArgs.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountUpdateInput_1.AccountUpdateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", AccountUpdateInput_1.AccountUpdateInput),
  ],
  UpsertOneAccountArgs.prototype,
  "update",
  void 0
);
UpsertOneAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpsertOneAccountArgs
);
exports.UpsertOneAccountArgs = UpsertOneAccountArgs;
