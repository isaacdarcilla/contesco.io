"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VerificationTokenCreateInput = class VerificationTokenCreateInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenCreateInput.prototype,
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
  VerificationTokenCreateInput.prototype,
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
  VerificationTokenCreateInput.prototype,
  "expires",
  void 0
);
VerificationTokenCreateInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenCreateInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenCreateInput
);
exports.VerificationTokenCreateInput = VerificationTokenCreateInput;
