"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByWithRelationInput_1 = require("../../../inputs/AccountOrderByWithRelationInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
const AccountScalarFieldEnum_1 = require("../../../../enums/AccountScalarFieldEnum");
let FindFirstAccountArgs = class FindFirstAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  FindFirstAccountArgs.prototype,
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
  FindFirstAccountArgs.prototype,
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
  FindFirstAccountArgs.prototype,
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
  FindFirstAccountArgs.prototype,
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
  FindFirstAccountArgs.prototype,
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
  FindFirstAccountArgs.prototype,
  "distinct",
  void 0
);
FindFirstAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindFirstAccountArgs
);
exports.FindFirstAccountArgs = FindFirstAccountArgs;
