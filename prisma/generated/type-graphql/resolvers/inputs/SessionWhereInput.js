"use strict";
var SessionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let SessionWhereInput = (SessionWhereInput_1 = class SessionWhereInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [SessionWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionWhereInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [SessionWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionWhereInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [SessionWhereInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionWhereInput.prototype,
  "NOT",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  SessionWhereInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  SessionWhereInput.prototype,
  "sessionToken",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => StringFilter_1.StringFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter),
  ],
  SessionWhereInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => DateTimeFilter_1.DateTimeFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter),
  ],
  SessionWhereInput.prototype,
  "expires",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserRelationFilter_1.UserRelationFilter, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter),
  ],
  SessionWhereInput.prototype,
  "user",
  void 0
);
SessionWhereInput = SessionWhereInput_1 = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionWhereInput", {
      isAbstract: true,
    }),
  ],
  SessionWhereInput
);
exports.SessionWhereInput = SessionWhereInput;
