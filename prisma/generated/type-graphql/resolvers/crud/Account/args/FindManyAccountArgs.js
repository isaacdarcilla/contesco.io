"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByWithRelationInput_1 = require("../../../inputs/AccountOrderByWithRelationInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
const AccountScalarFieldEnum_1 = require("../../../../enums/AccountScalarFieldEnum");
let FindManyAccountArgs = class FindManyAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  FindManyAccountArgs.prototype,
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
  FindManyAccountArgs.prototype,
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
  FindManyAccountArgs.prototype,
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
  FindManyAccountArgs.prototype,
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
  FindManyAccountArgs.prototype,
  "skip",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [AccountScalarFieldEnum_1.AccountScalarFieldEnum],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindManyAccountArgs.prototype,
  "distinct",
  void 0
);
FindManyAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindManyAccountArgs
);
exports.FindManyAccountArgs = FindManyAccountArgs;
