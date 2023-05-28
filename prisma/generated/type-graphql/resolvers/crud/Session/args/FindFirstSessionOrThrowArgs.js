"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSessionOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionOrderByWithRelationInput_1 = require("../../../inputs/SessionOrderByWithRelationInput");
const SessionWhereInput_1 = require("../../../inputs/SessionWhereInput");
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
const SessionScalarFieldEnum_1 = require("../../../../enums/SessionScalarFieldEnum");
let FindFirstSessionOrThrowArgs = class FindFirstSessionOrThrowArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SessionWhereInput_1.SessionWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", SessionWhereInput_1.SessionWhereInput),
  ],
  FindFirstSessionOrThrowArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        SessionOrderByWithRelationInput_1.SessionOrderByWithRelationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindFirstSessionOrThrowArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => SessionWhereUniqueInput_1.SessionWhereUniqueInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionWhereUniqueInput_1.SessionWhereUniqueInput
    ),
  ],
  FindFirstSessionOrThrowArgs.prototype,
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
  FindFirstSessionOrThrowArgs.prototype,
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
  FindFirstSessionOrThrowArgs.prototype,
  "skip",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [SessionScalarFieldEnum_1.SessionScalarFieldEnum],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindFirstSessionOrThrowArgs.prototype,
  "distinct",
  void 0
);
FindFirstSessionOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindFirstSessionOrThrowArgs
);
exports.FindFirstSessionOrThrowArgs = FindFirstSessionOrThrowArgs;
