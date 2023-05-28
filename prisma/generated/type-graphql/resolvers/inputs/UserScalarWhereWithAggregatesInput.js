"use strict";
var UserScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const EnumUserRoleWithAggregatesFilter_1 = require("../inputs/EnumUserRoleWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let UserScalarWhereWithAggregatesInput =
  (UserScalarWhereWithAggregatesInput_1 = class UserScalarWhereWithAggregatesInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [UserScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  UserScalarWhereWithAggregatesInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [UserScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  UserScalarWhereWithAggregatesInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [UserScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  UserScalarWhereWithAggregatesInput.prototype,
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
  UserScalarWhereWithAggregatesInput.prototype,
  "id",
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
  UserScalarWhereWithAggregatesInput.prototype,
  "name",
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
  UserScalarWhereWithAggregatesInput.prototype,
  "email",
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
  UserScalarWhereWithAggregatesInput.prototype,
  "emailVerified",
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
  UserScalarWhereWithAggregatesInput.prototype,
  "image",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        EnumUserRoleWithAggregatesFilter_1.EnumUserRoleWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EnumUserRoleWithAggregatesFilter_1.EnumUserRoleWithAggregatesFilter
    ),
  ],
  UserScalarWhereWithAggregatesInput.prototype,
  "role",
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
  UserScalarWhereWithAggregatesInput.prototype,
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
  UserScalarWhereWithAggregatesInput.prototype,
  "updatedAt",
  void 0
);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 =
  tslib_1.__decorate(
    [
      TypeGraphQL.InputType("UserScalarWhereWithAggregatesInput", {
        isAbstract: true,
      }),
    ],
    UserScalarWhereWithAggregatesInput
  );
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
