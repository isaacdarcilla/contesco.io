"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VerificationTokenCountAggregate = class VerificationTokenCountAggregate {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  VerificationTokenCountAggregate.prototype,
  "identifier",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  VerificationTokenCountAggregate.prototype,
  "token",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  VerificationTokenCountAggregate.prototype,
  "expires",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  VerificationTokenCountAggregate.prototype,
  "_all",
  void 0
);
VerificationTokenCountAggregate = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("VerificationTokenCountAggregate", {
      isAbstract: true,
    }),
  ],
  VerificationTokenCountAggregate
);
exports.VerificationTokenCountAggregate = VerificationTokenCountAggregate;
