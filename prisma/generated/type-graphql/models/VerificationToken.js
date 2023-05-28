"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationToken = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VerificationToken = class VerificationToken {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationToken.prototype,
  "identifier",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationToken.prototype,
  "token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Date),
  ],
  VerificationToken.prototype,
  "expires",
  void 0
);
VerificationToken = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("VerificationToken", {
      isAbstract: true,
    }),
  ],
  VerificationToken
);
exports.VerificationToken = VerificationToken;
