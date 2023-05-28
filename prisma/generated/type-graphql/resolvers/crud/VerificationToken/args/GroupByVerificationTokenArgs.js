"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenOrderByWithAggregationInput_1 = require("../../../inputs/VerificationTokenOrderByWithAggregationInput");
const VerificationTokenScalarWhereWithAggregatesInput_1 = require("../../../inputs/VerificationTokenScalarWhereWithAggregatesInput");
const VerificationTokenWhereInput_1 = require("../../../inputs/VerificationTokenWhereInput");
const VerificationTokenScalarFieldEnum_1 = require("../../../../enums/VerificationTokenScalarFieldEnum");
let GroupByVerificationTokenArgs = class GroupByVerificationTokenArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => VerificationTokenWhereInput_1.VerificationTokenWhereInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenWhereInput_1.VerificationTokenWhereInput
    ),
  ],
  GroupByVerificationTokenArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        VerificationTokenOrderByWithAggregationInput_1.VerificationTokenOrderByWithAggregationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByVerificationTokenArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        VerificationTokenScalarFieldEnum_1.VerificationTokenScalarFieldEnum,
      ],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupByVerificationTokenArgs.prototype,
  "by",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenScalarWhereWithAggregatesInput_1.VerificationTokenScalarWhereWithAggregatesInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenScalarWhereWithAggregatesInput_1.VerificationTokenScalarWhereWithAggregatesInput
    ),
  ],
  GroupByVerificationTokenArgs.prototype,
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
  GroupByVerificationTokenArgs.prototype,
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
  GroupByVerificationTokenArgs.prototype,
  "skip",
  void 0
);
GroupByVerificationTokenArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  GroupByVerificationTokenArgs
);
exports.GroupByVerificationTokenArgs = GroupByVerificationTokenArgs;
