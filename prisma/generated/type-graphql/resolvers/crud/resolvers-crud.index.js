"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenCrudResolver =
  exports.UserCrudResolver =
  exports.SessionCrudResolver =
  exports.EventCrudResolver =
  exports.ContestantCrudResolver =
  exports.AccountCrudResolver =
    void 0;
var AccountCrudResolver_1 = require("./Account/AccountCrudResolver");
Object.defineProperty(exports, "AccountCrudResolver", {
  enumerable: true,
  get: function () {
    return AccountCrudResolver_1.AccountCrudResolver;
  },
});
var ContestantCrudResolver_1 = require("./Contestant/ContestantCrudResolver");
Object.defineProperty(exports, "ContestantCrudResolver", {
  enumerable: true,
  get: function () {
    return ContestantCrudResolver_1.ContestantCrudResolver;
  },
});
var EventCrudResolver_1 = require("./Event/EventCrudResolver");
Object.defineProperty(exports, "EventCrudResolver", {
  enumerable: true,
  get: function () {
    return EventCrudResolver_1.EventCrudResolver;
  },
});
var SessionCrudResolver_1 = require("./Session/SessionCrudResolver");
Object.defineProperty(exports, "SessionCrudResolver", {
  enumerable: true,
  get: function () {
    return SessionCrudResolver_1.SessionCrudResolver;
  },
});
var UserCrudResolver_1 = require("./User/UserCrudResolver");
Object.defineProperty(exports, "UserCrudResolver", {
  enumerable: true,
  get: function () {
    return UserCrudResolver_1.UserCrudResolver;
  },
});
var VerificationTokenCrudResolver_1 = require("./VerificationToken/VerificationTokenCrudResolver");
Object.defineProperty(exports, "VerificationTokenCrudResolver", {
  enumerable: true,
  get: function () {
    return VerificationTokenCrudResolver_1.VerificationTokenCrudResolver;
  },
});
