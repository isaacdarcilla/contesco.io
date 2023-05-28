"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionCreateManyUserInput = class SessionCreateManyUserInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionCreateManyUserInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionCreateManyUserInput.prototype,
  "sessionToken",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  SessionCreateManyUserInput.prototype,
  "expires",
  void 0
);
SessionCreateManyUserInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionCreateManyUserInput", {
      isAbstract: true,
    }),
  ],
  SessionCreateManyUserInput
);
exports.SessionCreateManyUserInput = SessionCreateManyUserInput;
