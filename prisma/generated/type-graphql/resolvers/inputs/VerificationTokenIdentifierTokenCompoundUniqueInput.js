"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenIdentifierTokenCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VerificationTokenIdentifierTokenCompoundUniqueInput = class VerificationTokenIdentifierTokenCompoundUniqueInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenIdentifierTokenCompoundUniqueInput.prototype,
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
  VerificationTokenIdentifierTokenCompoundUniqueInput.prototype,
  "token",
  void 0
);
VerificationTokenIdentifierTokenCompoundUniqueInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType(
      "VerificationTokenIdentifierTokenCompoundUniqueInput",
      {
        isAbstract: true,
      }
    ),
  ],
  VerificationTokenIdentifierTokenCompoundUniqueInput
);
exports.VerificationTokenIdentifierTokenCompoundUniqueInput =
  VerificationTokenIdentifierTokenCompoundUniqueInput;
