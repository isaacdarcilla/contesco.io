"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserRoleFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRole_1 = require("../../enums/UserRole");
let EnumUserRoleFieldUpdateOperationsInput = class EnumUserRoleFieldUpdateOperationsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRole_1.UserRole, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EnumUserRoleFieldUpdateOperationsInput.prototype,
  "set",
  void 0
);
EnumUserRoleFieldUpdateOperationsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EnumUserRoleFieldUpdateOperationsInput", {
      isAbstract: true,
    }),
  ],
  EnumUserRoleFieldUpdateOperationsInput
);
exports.EnumUserRoleFieldUpdateOperationsInput =
  EnumUserRoleFieldUpdateOperationsInput;
