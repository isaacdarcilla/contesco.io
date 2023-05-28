"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserRole;
(function (UserRole) {
  UserRole["ADMIN"] = "ADMIN";
  UserRole["ORGANIZER"] = "ORGANIZER";
  UserRole["JUDGE"] = "JUDGE";
  UserRole["CONTESTANT"] = "CONTESTANT";
  UserRole["AUDIENCE"] = "AUDIENCE";
})((UserRole = exports.UserRole || (exports.UserRole = {})));
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
