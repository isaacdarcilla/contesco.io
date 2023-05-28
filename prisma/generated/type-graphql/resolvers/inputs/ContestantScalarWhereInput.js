"use strict";
var ContestantScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ContestantScalarWhereInput =
  (ContestantScalarWhereInput_1 = class ContestantScalarWhereInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantScalarWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantScalarWhereInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantScalarWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantScalarWhereInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantScalarWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantScalarWhereInput.prototype,
  "NOT",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "eventId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "firstName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  ContestantScalarWhereInput.prototype,
  "middleName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "lastName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "gender",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => IntFilter_1.IntFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "age",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  ContestantScalarWhereInput.prototype,
  "nationality",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  ContestantScalarWhereInput.prototype,
  "birthDate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "phoneNumber",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  ContestantScalarWhereInput.prototype,
  "email",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringNullableFilter_1.StringNullableFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      StringNullableFilter_1.StringNullableFilter
    ),
  ],
  ContestantScalarWhereInput.prototype,
  "photo",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => DateTimeNullableFilter_1.DateTimeNullableFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableFilter_1.DateTimeNullableFilter
    ),
  ],
  ContestantScalarWhereInput.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => DateTimeNullableFilter_1.DateTimeNullableFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeNullableFilter_1.DateTimeNullableFilter
    ),
  ],
  ContestantScalarWhereInput.prototype,
  "updatedAt",
  void 0
);
ContestantScalarWhereInput = ContestantScalarWhereInput_1 = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantScalarWhereInput", {
      isAbstract: true,
    }),
  ],
  ContestantScalarWhereInput
);
exports.ContestantScalarWhereInput = ContestantScalarWhereInput;
