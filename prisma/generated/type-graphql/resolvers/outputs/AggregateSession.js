"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSession = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCountAggregate_1 = require("../outputs/SessionCountAggregate");
const SessionMaxAggregate_1 = require("../outputs/SessionMaxAggregate");
const SessionMinAggregate_1 = require("../outputs/SessionMinAggregate");
let AggregateSession = class AggregateSession {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => SessionCountAggregate_1.SessionCountAggregate,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionCountAggregate_1.SessionCountAggregate
    ),
  ],
  AggregateSession.prototype,
  "_count",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SessionMinAggregate_1.SessionMinAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      SessionMinAggregate_1.SessionMinAggregate
    ),
  ],
  AggregateSession.prototype,
  "_min",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SessionMaxAggregate_1.SessionMaxAggregate, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      SessionMaxAggregate_1.SessionMaxAggregate
    ),
  ],
  AggregateSession.prototype,
  "_max",
  void 0
);
AggregateSession = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("AggregateSession", {
      isAbstract: true,
    }),
  ],
  AggregateSession
);
exports.AggregateSession = AggregateSession;
