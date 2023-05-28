"use strict";
var NestedEnumUserRoleWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserRoleFilter_1 = require("../inputs/NestedEnumUserRoleFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const UserRole_1 = require("../../enums/UserRole");
let NestedEnumUserRoleWithAggregatesFilter =
  (NestedEnumUserRoleWithAggregatesFilter_1 = class NestedEnumUserRoleWithAggregatesFilter {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRole_1.UserRole, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  NestedEnumUserRoleWithAggregatesFilter.prototype,
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
  NestedEnumUserRoleWithAggregatesFilter.prototype,
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
  NestedEnumUserRoleWithAggregatesFilter.prototype,
  "notIn",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => NestedEnumUserRoleWithAggregatesFilter_1, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", NestedEnumUserRoleWithAggregatesFilter),
  ],
  NestedEnumUserRoleWithAggregatesFilter.prototype,
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
  NestedEnumUserRoleWithAggregatesFilter.prototype,
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
  NestedEnumUserRoleWithAggregatesFilter.prototype,
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
  NestedEnumUserRoleWithAggregatesFilter.prototype,
  "_max",
  void 0
);
NestedEnumUserRoleWithAggregatesFilter =
  NestedEnumUserRoleWithAggregatesFilter_1 = tslib_1.__decorate(
    [
      TypeGraphQL.InputType("NestedEnumUserRoleWithAggregatesFilter", {
        isAbstract: true,
      }),
    ],
    NestedEnumUserRoleWithAggregatesFilter
  );
exports.NestedEnumUserRoleWithAggregatesFilter =
  NestedEnumUserRoleWithAggregatesFilter;
