"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionOrderByWithAggregationInput_1 = require("../../../inputs/SessionOrderByWithAggregationInput");
const SessionScalarWhereWithAggregatesInput_1 = require("../../../inputs/SessionScalarWhereWithAggregatesInput");
const SessionWhereInput_1 = require("../../../inputs/SessionWhereInput");
const SessionScalarFieldEnum_1 = require("../../../../enums/SessionScalarFieldEnum");
let GroupBySessionArgs = class GroupBySessionArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SessionWhereInput_1.SessionWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", SessionWhereInput_1.SessionWhereInput),
  ],
  GroupBySessionArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        SessionOrderByWithAggregationInput_1.SessionOrderByWithAggregationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupBySessionArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [SessionScalarFieldEnum_1.SessionScalarFieldEnum],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  GroupBySessionArgs.prototype,
  "by",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionScalarWhereWithAggregatesInput_1.SessionScalarWhereWithAggregatesInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionScalarWhereWithAggregatesInput_1.SessionScalarWhereWithAggregatesInput
    ),
  ],
  GroupBySessionArgs.prototype,
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
  GroupBySessionArgs.prototype,
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
  GroupBySessionArgs.prototype,
  "skip",
  void 0
);
GroupBySessionArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  GroupBySessionArgs
);
exports.GroupBySessionArgs = GroupBySessionArgs;
