"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventOrderByWithRelationInput_1 = require("../../../inputs/EventOrderByWithRelationInput");
const EventWhereInput_1 = require("../../../inputs/EventWhereInput");
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
let AggregateEventArgs = class AggregateEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  AggregateEventArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        EventOrderByWithRelationInput_1.EventOrderByWithRelationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  AggregateEventArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventWhereUniqueInput_1.EventWhereUniqueInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventWhereUniqueInput_1.EventWhereUniqueInput
    ),
  ],
  AggregateEventArgs.prototype,
  "cursor",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AggregateEventArgs.prototype,
  "take",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  AggregateEventArgs.prototype,
  "skip",
  void 0
);
AggregateEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  AggregateEventArgs
);
exports.AggregateEventArgs = AggregateEventArgs;
