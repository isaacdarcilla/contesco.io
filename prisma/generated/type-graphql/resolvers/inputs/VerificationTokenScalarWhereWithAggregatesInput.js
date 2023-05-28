"use strict";
var VerificationTokenScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let VerificationTokenScalarWhereWithAggregatesInput =
  (VerificationTokenScalarWhereWithAggregatesInput_1 = class VerificationTokenScalarWhereWithAggregatesInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [VerificationTokenScalarWhereWithAggregatesInput_1],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  VerificationTokenScalarWhereWithAggregatesInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [VerificationTokenScalarWhereWithAggregatesInput_1],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  VerificationTokenScalarWhereWithAggregatesInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [VerificationTokenScalarWhereWithAggregatesInput_1],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  VerificationTokenScalarWhereWithAggregatesInput.prototype,
  "NOT",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  VerificationTokenScalarWhereWithAggregatesInput.prototype,
  "identifier",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  VerificationTokenScalarWhereWithAggregatesInput.prototype,
  "token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter
    ),
  ],
  VerificationTokenScalarWhereWithAggregatesInput.prototype,
  "expires",
  void 0
);
VerificationTokenScalarWhereWithAggregatesInput =
  VerificationTokenScalarWhereWithAggregatesInput_1 = tslib_1.__decorate(
    [
      TypeGraphQL.InputType("VerificationTokenScalarWhereWithAggregatesInput", {
        isAbstract: true,
      }),
    ],
    VerificationTokenScalarWhereWithAggregatesInput
  );
exports.VerificationTokenScalarWhereWithAggregatesInput =
  VerificationTokenScalarWhereWithAggregatesInput;
