"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VerificationTokenScalarFieldEnum;
(function (VerificationTokenScalarFieldEnum) {
  VerificationTokenScalarFieldEnum["identifier"] = "identifier";
  VerificationTokenScalarFieldEnum["token"] = "token";
  VerificationTokenScalarFieldEnum["expires"] = "expires";
})(
  (VerificationTokenScalarFieldEnum =
    exports.VerificationTokenScalarFieldEnum ||
    (exports.VerificationTokenScalarFieldEnum = {}))
);
TypeGraphQL.registerEnumType(VerificationTokenScalarFieldEnum, {
  name: "VerificationTokenScalarFieldEnum",
  description: undefined,
});
