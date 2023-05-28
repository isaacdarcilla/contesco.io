"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVerificationToken = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenCountAggregate_1 = require("../outputs/VerificationTokenCountAggregate");
const VerificationTokenMaxAggregate_1 = require("../outputs/VerificationTokenMaxAggregate");
const VerificationTokenMinAggregate_1 = require("../outputs/VerificationTokenMinAggregate");
let AggregateVerificationToken = class AggregateVerificationToken {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenCountAggregate_1.VerificationTokenCountAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenCountAggregate_1.VerificationTokenCountAggregate
    ),
  ],
  AggregateVerificationToken.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => VerificationTokenMinAggregate_1.VerificationTokenMinAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenMinAggregate_1.VerificationTokenMinAggregate
    ),
  ],
  AggregateVerificationToken.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => VerificationTokenMaxAggregate_1.VerificationTokenMaxAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenMaxAggregate_1.VerificationTokenMaxAggregate
    ),
  ],
  AggregateVerificationToken.prototype,
  "_max",
  void 0
);
AggregateVerificationToken = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("AggregateVerificationToken", {
      isAbstract: true,
    }),
  ],
  AggregateVerificationToken
);
exports.AggregateVerificationToken = AggregateVerificationToken;
