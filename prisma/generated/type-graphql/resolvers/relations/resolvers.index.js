"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver =
  exports.SessionRelationsResolver =
  exports.EventRelationsResolver =
  exports.ContestantRelationsResolver =
  exports.AccountRelationsResolver =
    void 0;
var AccountRelationsResolver_1 = require("./Account/AccountRelationsResolver");
Object.defineProperty(exports, "AccountRelationsResolver", {
  enumerable: true,
  get: function () {
    return AccountRelationsResolver_1.AccountRelationsResolver;
  },
});
var ContestantRelationsResolver_1 = require("./Contestant/ContestantRelationsResolver");
Object.defineProperty(exports, "ContestantRelationsResolver", {
  enumerable: true,
  get: function () {
    return ContestantRelationsResolver_1.ContestantRelationsResolver;
  },
});
var EventRelationsResolver_1 = require("./Event/EventRelationsResolver");
Object.defineProperty(exports, "EventRelationsResolver", {
  enumerable: true,
  get: function () {
    return EventRelationsResolver_1.EventRelationsResolver;
  },
});
var SessionRelationsResolver_1 = require("./Session/SessionRelationsResolver");
Object.defineProperty(exports, "SessionRelationsResolver", {
  enumerable: true,
  get: function () {
    return SessionRelationsResolver_1.SessionRelationsResolver;
  },
});
var UserRelationsResolver_1 = require("./User/UserRelationsResolver");
Object.defineProperty(exports, "UserRelationsResolver", {
  enumerable: true,
  get: function () {
    return UserRelationsResolver_1.UserRelationsResolver;
  },
});
