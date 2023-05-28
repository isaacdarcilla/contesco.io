"use strict";
var ContestantWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EventRelationFilter_1 = require("../inputs/EventRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ContestantWhereInput =
  (ContestantWhereInput_1 = class ContestantWhereInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantWhereInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantWhereInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [ContestantWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
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
  ContestantWhereInput.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventRelationFilter_1.EventRelationFilter, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      EventRelationFilter_1.EventRelationFilter
    ),
  ],
  ContestantWhereInput.prototype,
  "event",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRelationFilter_1.UserRelationFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter),
  ],
  ContestantWhereInput.prototype,
  "user",
  void 0
);
ContestantWhereInput = ContestantWhereInput_1 = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantWhereInput", {
      isAbstract: true,
    }),
  ],
  ContestantWhereInput
);
exports.ContestantWhereInput = ContestantWhereInput;
