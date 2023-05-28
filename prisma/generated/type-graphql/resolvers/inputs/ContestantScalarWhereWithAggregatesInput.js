"use strict";
var ContestantScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ContestantScalarWhereWithAggregatesInput =
  (ContestantScalarWhereWithAggregatesInput_1 = class ContestantScalarWhereWithAggregatesInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "id",
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "eventId",
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "userId",
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "firstName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "middleName",
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "lastName",
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "gender",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => IntWithAggregatesFilter_1.IntWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      IntWithAggregatesFilter_1.IntWithAggregatesFilter
    ),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "age",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "nationality",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "birthDate",
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "phoneNumber",
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
  ContestantScalarWhereWithAggregatesInput.prototype,
  "email",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter
    ),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "photo",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter
    ),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter
    ),
  ],
  ContestantScalarWhereWithAggregatesInput.prototype,
  "updatedAt",
  void 0
);
ContestantScalarWhereWithAggregatesInput =
  ContestantScalarWhereWithAggregatesInput_1 = tslib_1.__decorate(
    [
      TypeGraphQL.InputType("ContestantScalarWhereWithAggregatesInput", {
        isAbstract: true,
      }),
    ],
    ContestantScalarWhereWithAggregatesInput
  );
exports.ContestantScalarWhereWithAggregatesInput =
  ContestantScalarWhereWithAggregatesInput;
