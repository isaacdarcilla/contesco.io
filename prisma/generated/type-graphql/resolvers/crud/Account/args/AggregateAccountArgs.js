"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByWithRelationInput_1 = require("../../../inputs/AccountOrderByWithRelationInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let AggregateAccountArgs = class AggregateAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  AggregateAccountArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        AccountOrderByWithRelationInput_1.AccountOrderByWithRelationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  AggregateAccountArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountWhereUniqueInput_1.AccountWhereUniqueInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountWhereUniqueInput_1.AccountWhereUniqueInput
    ),
  ],
  AggregateAccountArgs.prototype,
  "cursor",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AggregateAccountArgs.prototype,
  "take",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AggregateAccountArgs.prototype,
  "skip",
  void 0
);
AggregateAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  AggregateAccountArgs
);
exports.AggregateAccountArgs = AggregateAccountArgs;
