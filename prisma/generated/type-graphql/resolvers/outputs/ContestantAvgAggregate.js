"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ContestantAvgAggregate = class ContestantAvgAggregate {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantAvgAggregate.prototype,
  "age",
  void 0
);
ContestantAvgAggregate = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("ContestantAvgAggregate", {
      isAbstract: true,
    }),
  ],
  ContestantAvgAggregate
);
exports.ContestantAvgAggregate = ContestantAvgAggregate;
