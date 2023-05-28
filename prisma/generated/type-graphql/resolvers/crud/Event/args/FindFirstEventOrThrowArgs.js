"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEventOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventOrderByWithRelationInput_1 = require("../../../inputs/EventOrderByWithRelationInput");
const EventWhereInput_1 = require("../../../inputs/EventWhereInput");
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
const EventScalarFieldEnum_1 = require("../../../../enums/EventScalarFieldEnum");
let FindFirstEventOrThrowArgs = class FindFirstEventOrThrowArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  FindFirstEventOrThrowArgs.prototype,
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
  FindFirstEventOrThrowArgs.prototype,
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
  FindFirstEventOrThrowArgs.prototype,
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
  FindFirstEventOrThrowArgs.prototype,
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
  FindFirstEventOrThrowArgs.prototype,
  "skip",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [EventScalarFieldEnum_1.EventScalarFieldEnum],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindFirstEventOrThrowArgs.prototype,
  "distinct",
  void 0
);
FindFirstEventOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindFirstEventOrThrowArgs
);
exports.FindFirstEventOrThrowArgs = FindFirstEventOrThrowArgs;
