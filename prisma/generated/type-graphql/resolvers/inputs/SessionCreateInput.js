"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutSessionsInput_1 = require("../inputs/UserCreateNestedOneWithoutSessionsInput");
let SessionCreateInput = class SessionCreateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  SessionCreateInput.prototype,
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
  SessionCreateInput.prototype,
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
  SessionCreateInput.prototype,
  "expires",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateNestedOneWithoutSessionsInput_1.UserCreateNestedOneWithoutSessionsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateNestedOneWithoutSessionsInput_1.UserCreateNestedOneWithoutSessionsInput
    ),
  ],
  SessionCreateInput.prototype,
  "user",
  void 0
);
SessionCreateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("SessionCreateInput", {
      isAbstract: true,
    }),
  ],
  SessionCreateInput
);
exports.SessionCreateInput = SessionCreateInput;
