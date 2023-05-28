"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionCreateManyInput = class SessionCreateManyInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionCreateManyInput.prototype,
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
  SessionCreateManyInput.prototype,
  "sessionToken",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionCreateManyInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  SessionCreateManyInput.prototype,
  "expires",
  void 0
);
SessionCreateManyInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionCreateManyInput", {
      isAbstract: true,
    }),
  ],
  SessionCreateManyInput
);
exports.SessionCreateManyInput = SessionCreateManyInput;
