"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ContestantWhereUniqueInput = class ContestantWhereUniqueInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  ContestantWhereUniqueInput.prototype,
  "id",
  void 0
);
ContestantWhereUniqueInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantWhereUniqueInput", {
      isAbstract: true,
    }),
  ],
  ContestantWhereUniqueInput
);
exports.ContestantWhereUniqueInput = ContestantWhereUniqueInput;
