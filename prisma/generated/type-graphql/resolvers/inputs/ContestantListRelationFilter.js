"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantWhereInput_1 = require("../inputs/ContestantWhereInput");
let ContestantListRelationFilter = class ContestantListRelationFilter {};
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
  ContestantListRelationFilter.prototype,
  "every",
  void 0
);
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
  ContestantListRelationFilter.prototype,
  "some",
  void 0
);
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
  ContestantListRelationFilter.prototype,
  "none",
  void 0
);
ContestantListRelationFilter = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantListRelationFilter", {
      isAbstract: true,
    }),
  ],
  ContestantListRelationFilter
);
exports.ContestantListRelationFilter = ContestantListRelationFilter;
