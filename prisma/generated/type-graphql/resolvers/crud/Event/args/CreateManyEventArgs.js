"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateManyInput_1 = require("../../../inputs/EventCreateManyInput");
let CreateManyEventArgs = class CreateManyEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [EventCreateManyInput_1.EventCreateManyInput],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  CreateManyEventArgs.prototype,
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
  CreateManyEventArgs.prototype,
  "skipDuplicates",
  void 0
);
CreateManyEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateManyEventArgs
);
exports.CreateManyEventArgs = CreateManyEventArgs;
