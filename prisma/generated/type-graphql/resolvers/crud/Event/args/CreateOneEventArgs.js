"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateInput_1 = require("../../../inputs/EventCreateInput");
let CreateOneEventArgs = class CreateOneEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventCreateInput_1.EventCreateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", EventCreateInput_1.EventCreateInput),
  ],
  CreateOneEventArgs.prototype,
  "data",
  void 0
);
CreateOneEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateOneEventArgs
);
exports.CreateOneEventArgs = CreateOneEventArgs;
