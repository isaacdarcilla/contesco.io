"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserRoleFilter_1 = require("../inputs/NestedEnumUserRoleFilter");
const UserRole_1 = require("../../enums/UserRole");
let EnumUserRoleFilter = class EnumUserRoleFilter {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRole_1.UserRole, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EnumUserRoleFilter.prototype,
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
  EnumUserRoleFilter.prototype,
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
  EnumUserRoleFilter.prototype,
  "notIn",
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
  EnumUserRoleFilter.prototype,
  "not",
  void 0
);
EnumUserRoleFilter = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EnumUserRoleFilter", {
      isAbstract: true,
    }),
  ],
  EnumUserRoleFilter
);
exports.EnumUserRoleFilter = EnumUserRoleFilter;
