"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContestant = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantAvgAggregate_1 = require("../outputs/ContestantAvgAggregate");
const ContestantCountAggregate_1 = require("../outputs/ContestantCountAggregate");
const ContestantMaxAggregate_1 = require("../outputs/ContestantMaxAggregate");
const ContestantMinAggregate_1 = require("../outputs/ContestantMinAggregate");
const ContestantSumAggregate_1 = require("../outputs/ContestantSumAggregate");
let AggregateContestant = class AggregateContestant {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantCountAggregate_1.ContestantCountAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCountAggregate_1.ContestantCountAggregate
    ),
  ],
  AggregateContestant.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantAvgAggregate_1.ContestantAvgAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantAvgAggregate_1.ContestantAvgAggregate
    ),
  ],
  AggregateContestant.prototype,
  "_avg",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantSumAggregate_1.ContestantSumAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantSumAggregate_1.ContestantSumAggregate
    ),
  ],
  AggregateContestant.prototype,
  "_sum",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantMinAggregate_1.ContestantMinAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantMinAggregate_1.ContestantMinAggregate
    ),
  ],
  AggregateContestant.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantMaxAggregate_1.ContestantMaxAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantMaxAggregate_1.ContestantMaxAggregate
    ),
  ],
  AggregateContestant.prototype,
  "_max",
  void 0
);
AggregateContestant = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("AggregateContestant", {
      isAbstract: true,
    }),
  ],
  AggregateContestant
);
exports.AggregateContestant = AggregateContestant;
