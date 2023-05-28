"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyContestantArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateManyInput_1 = require("../../../inputs/ContestantCreateManyInput");
let CreateManyContestantArgs = class CreateManyContestantArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantCreateManyInput_1.ContestantCreateManyInput],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  CreateManyContestantArgs.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => Boolean, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Boolean),
  ],
  CreateManyContestantArgs.prototype,
  "skipDuplicates",
  void 0
);
CreateManyContestantArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateManyContestantArgs
);
exports.CreateManyContestantArgs = CreateManyContestantArgs;
