"use strict";
var AccountScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let AccountScalarWhereWithAggregatesInput =
  (AccountScalarWhereWithAggregatesInput_1 = class AccountScalarWhereWithAggregatesInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountScalarWhereWithAggregatesInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountScalarWhereWithAggregatesInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [AccountScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountScalarWhereWithAggregatesInput.prototype,
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
  AccountScalarWhereWithAggregatesInput.prototype,
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
  AccountScalarWhereWithAggregatesInput.prototype,
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "type",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "provider",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "providerAccountId",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "refresh_token",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "access_token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter
    ),
  ],
  AccountScalarWhereWithAggregatesInput.prototype,
  "expires_at",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "token_type",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "scope",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "id_token",
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
  AccountScalarWhereWithAggregatesInput.prototype,
  "session_state",
  void 0
);
AccountScalarWhereWithAggregatesInput =
  AccountScalarWhereWithAggregatesInput_1 = tslib_1.__decorate(
    [
      TypeGraphQL.InputType("AccountScalarWhereWithAggregatesInput", {
        isAbstract: true,
      }),
    ],
    AccountScalarWhereWithAggregatesInput
  );
exports.AccountScalarWhereWithAggregatesInput =
  AccountScalarWhereWithAggregatesInput;
