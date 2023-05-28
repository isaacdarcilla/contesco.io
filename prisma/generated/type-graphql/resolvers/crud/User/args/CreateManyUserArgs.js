"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyInput_1 = require("../../../inputs/UserCreateManyInput");
let CreateManyUserArgs = class CreateManyUserArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [UserCreateManyInput_1.UserCreateManyInput], {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  CreateManyUserArgs.prototype,
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
  CreateManyUserArgs.prototype,
  "skipDuplicates",
  void 0
);
CreateManyUserArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateManyUserArgs
);
exports.CreateManyUserArgs = CreateManyUserArgs;
