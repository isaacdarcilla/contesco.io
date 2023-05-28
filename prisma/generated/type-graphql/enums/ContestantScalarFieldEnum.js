"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ContestantScalarFieldEnum;
(function (ContestantScalarFieldEnum) {
  ContestantScalarFieldEnum["id"] = "id";
  ContestantScalarFieldEnum["eventId"] = "eventId";
  ContestantScalarFieldEnum["userId"] = "userId";
  ContestantScalarFieldEnum["firstName"] = "firstName";
  ContestantScalarFieldEnum["middleName"] = "middleName";
  ContestantScalarFieldEnum["lastName"] = "lastName";
  ContestantScalarFieldEnum["gender"] = "gender";
  ContestantScalarFieldEnum["age"] = "age";
  ContestantScalarFieldEnum["nationality"] = "nationality";
  ContestantScalarFieldEnum["birthDate"] = "birthDate";
  ContestantScalarFieldEnum["phoneNumber"] = "phoneNumber";
  ContestantScalarFieldEnum["email"] = "email";
  ContestantScalarFieldEnum["photo"] = "photo";
  ContestantScalarFieldEnum["createdAt"] = "createdAt";
  ContestantScalarFieldEnum["updatedAt"] = "updatedAt";
})(
  (ContestantScalarFieldEnum =
    exports.ContestantScalarFieldEnum ||
    (exports.ContestantScalarFieldEnum = {}))
);
TypeGraphQL.registerEnumType(ContestantScalarFieldEnum, {
  name: "ContestantScalarFieldEnum",
  description: undefined,
});
