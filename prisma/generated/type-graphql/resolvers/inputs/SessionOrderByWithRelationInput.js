"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SessionOrderByWithRelationInput = class SessionOrderByWithRelationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionOrderByWithRelationInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionOrderByWithRelationInput.prototype,
  "sessionToken",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionOrderByWithRelationInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionOrderByWithRelationInput.prototype,
  "expires",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserOrderByWithRelationInput_1.UserOrderByWithRelationInput
    ),
  ],
  SessionOrderByWithRelationInput.prototype,
  "user",
  void 0
);
SessionOrderByWithRelationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionOrderByWithRelationInput", {
      isAbstract: true,
    }),
  ],
  SessionOrderByWithRelationInput
);
exports.SessionOrderByWithRelationInput = SessionOrderByWithRelationInput;
