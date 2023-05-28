"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstContestantOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantOrderByWithRelationInput_1 = require("../../../inputs/ContestantOrderByWithRelationInput");
const ContestantWhereInput_1 = require("../../../inputs/ContestantWhereInput");
const ContestantWhereUniqueInput_1 = require("../../../inputs/ContestantWhereUniqueInput");
const ContestantScalarFieldEnum_1 = require("../../../../enums/ContestantScalarFieldEnum");
let FindFirstContestantOrThrowArgs = class FindFirstContestantOrThrowArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => ContestantWhereInput_1.ContestantWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      ContestantWhereInput_1.ContestantWhereInput
    ),
  ],
  FindFirstContestantOrThrowArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantOrderByWithRelationInput_1.ContestantOrderByWithRelationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindFirstContestantOrThrowArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => ContestantWhereUniqueInput_1.ContestantWhereUniqueInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantWhereUniqueInput_1.ContestantWhereUniqueInput
    ),
  ],
  FindFirstContestantOrThrowArgs.prototype,
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
  FindFirstContestantOrThrowArgs.prototype,
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
  FindFirstContestantOrThrowArgs.prototype,
  "skip",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantScalarFieldEnum_1.ContestantScalarFieldEnum],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindFirstContestantOrThrowArgs.prototype,
  "distinct",
  void 0
);
FindFirstContestantOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindFirstContestantOrThrowArgs
);
exports.FindFirstContestantOrThrowArgs = FindFirstContestantOrThrowArgs;
