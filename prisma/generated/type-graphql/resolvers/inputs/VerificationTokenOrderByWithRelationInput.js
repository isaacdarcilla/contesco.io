"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VerificationTokenOrderByWithRelationInput = class VerificationTokenOrderByWithRelationInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenOrderByWithRelationInput.prototype,
  "identifier",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenOrderByWithRelationInput.prototype,
  "token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SortOrder_1.SortOrder, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenOrderByWithRelationInput.prototype,
  "expires",
  void 0
);
VerificationTokenOrderByWithRelationInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("VerificationTokenOrderByWithRelationInput", {
      isAbstract: true,
    }),
  ],
  VerificationTokenOrderByWithRelationInput
);
exports.VerificationTokenOrderByWithRelationInput =
  VerificationTokenOrderByWithRelationInput;
