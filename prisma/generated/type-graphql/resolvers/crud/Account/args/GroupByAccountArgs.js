"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByWithAggregationInput_1 = require("../../../inputs/AccountOrderByWithAggregationInput");
const AccountScalarWhereWithAggregatesInput_1 = require("../../../inputs/AccountScalarWhereWithAggregatesInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
const AccountScalarFieldEnum_1 = require("../../../../enums/AccountScalarFieldEnum");
let GroupByAccountArgs = class GroupByAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  GroupByAccountArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        AccountOrderByWithAggregationInput_1.AccountOrderByWithAggregationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByAccountArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [AccountScalarFieldEnum_1.AccountScalarFieldEnum],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByAccountArgs.prototype,
  "by",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountScalarWhereWithAggregatesInput_1.AccountScalarWhereWithAggregatesInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountScalarWhereWithAggregatesInput_1.AccountScalarWhereWithAggregatesInput
    ),
  ],
  GroupByAccountArgs.prototype,
  "having",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  GroupByAccountArgs.prototype,
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
  GroupByAccountArgs.prototype,
  "skip",
  void 0
);
GroupByAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  GroupByAccountArgs
);
exports.GroupByAccountArgs = GroupByAccountArgs;
