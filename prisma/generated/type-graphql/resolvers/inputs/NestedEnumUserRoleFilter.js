"use strict";
var NestedEnumUserRoleFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRole_1 = require("../../enums/UserRole");
let NestedEnumUserRoleFilter =
  (NestedEnumUserRoleFilter_1 = class NestedEnumUserRoleFilter {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRole_1.UserRole, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  NestedEnumUserRoleFilter.prototype,
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
  NestedEnumUserRoleFilter.prototype,
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
  NestedEnumUserRoleFilter.prototype,
  "notIn",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => NestedEnumUserRoleFilter_1, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", NestedEnumUserRoleFilter),
  ],
  NestedEnumUserRoleFilter.prototype,
  "not",
  void 0
);
NestedEnumUserRoleFilter = NestedEnumUserRoleFilter_1 = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("NestedEnumUserRoleFilter", {
      isAbstract: true,
    }),
  ],
  NestedEnumUserRoleFilter
);
exports.NestedEnumUserRoleFilter = NestedEnumUserRoleFilter;
