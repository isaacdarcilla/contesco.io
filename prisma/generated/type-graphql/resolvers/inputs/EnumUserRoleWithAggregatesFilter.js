"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserRoleFilter_1 = require("../inputs/NestedEnumUserRoleFilter");
const NestedEnumUserRoleWithAggregatesFilter_1 = require("../inputs/NestedEnumUserRoleWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserRole_1 = require("../../enums/UserRole");
let EnumUserRoleWithAggregatesFilter = class EnumUserRoleWithAggregatesFilter {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRole_1.UserRole, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EnumUserRoleWithAggregatesFilter.prototype,
  "equals",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [UserRole_1.UserRole], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  EnumUserRoleWithAggregatesFilter.prototype,
  "in",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [UserRole_1.UserRole], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  EnumUserRoleWithAggregatesFilter.prototype,
  "notIn",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        NestedEnumUserRoleWithAggregatesFilter_1.NestedEnumUserRoleWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NestedEnumUserRoleWithAggregatesFilter_1.NestedEnumUserRoleWithAggregatesFilter
    ),
  ],
  EnumUserRoleWithAggregatesFilter.prototype,
  "not",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => NestedIntFilter_1.NestedIntFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter),
  ],
  EnumUserRoleWithAggregatesFilter.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => NestedEnumUserRoleFilter_1.NestedEnumUserRoleFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NestedEnumUserRoleFilter_1.NestedEnumUserRoleFilter
    ),
  ],
  EnumUserRoleWithAggregatesFilter.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => NestedEnumUserRoleFilter_1.NestedEnumUserRoleFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      NestedEnumUserRoleFilter_1.NestedEnumUserRoleFilter
    ),
  ],
  EnumUserRoleWithAggregatesFilter.prototype,
  "_max",
  void 0
);
EnumUserRoleWithAggregatesFilter = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EnumUserRoleWithAggregatesFilter", {
      isAbstract: true,
    }),
  ],
  EnumUserRoleWithAggregatesFilter
);
exports.EnumUserRoleWithAggregatesFilter = EnumUserRoleWithAggregatesFilter;
