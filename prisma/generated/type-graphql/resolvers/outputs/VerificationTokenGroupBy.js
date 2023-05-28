"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenCountAggregate_1 = require("../outputs/VerificationTokenCountAggregate");
const VerificationTokenMaxAggregate_1 = require("../outputs/VerificationTokenMaxAggregate");
const VerificationTokenMinAggregate_1 = require("../outputs/VerificationTokenMinAggregate");
let VerificationTokenGroupBy = class VerificationTokenGroupBy {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  VerificationTokenGroupBy.prototype,
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
  VerificationTokenGroupBy.prototype,
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
  VerificationTokenGroupBy.prototype,
  "expires",
  void 0
);
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
  VerificationTokenGroupBy.prototype,
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
  VerificationTokenGroupBy.prototype,
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
  VerificationTokenGroupBy.prototype,
  "_max",
  void 0
);
VerificationTokenGroupBy = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("VerificationTokenGroupBy", {
      isAbstract: true,
    }),
  ],
  VerificationTokenGroupBy
);
exports.VerificationTokenGroupBy = VerificationTokenGroupBy;
