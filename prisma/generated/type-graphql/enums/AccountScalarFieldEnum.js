"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AccountScalarFieldEnum;
(function (AccountScalarFieldEnum) {
  AccountScalarFieldEnum["id"] = "id";
  AccountScalarFieldEnum["userId"] = "userId";
  AccountScalarFieldEnum["type"] = "type";
  AccountScalarFieldEnum["provider"] = "provider";
  AccountScalarFieldEnum["providerAccountId"] = "providerAccountId";
  AccountScalarFieldEnum["refresh_token"] = "refresh_token";
  AccountScalarFieldEnum["access_token"] = "access_token";
  AccountScalarFieldEnum["expires_at"] = "expires_at";
  AccountScalarFieldEnum["token_type"] = "token_type";
  AccountScalarFieldEnum["scope"] = "scope";
  AccountScalarFieldEnum["id_token"] = "id_token";
  AccountScalarFieldEnum["session_state"] = "session_state";
})(
  (AccountScalarFieldEnum =
    exports.AccountScalarFieldEnum || (exports.AccountScalarFieldEnum = {}))
);
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
  name: "AccountScalarFieldEnum",
  description: undefined,
});
