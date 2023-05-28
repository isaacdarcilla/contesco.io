"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereInput_1 = require("../../../inputs/EventWhereInput");
let DeleteManyEventArgs = class DeleteManyEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  DeleteManyEventArgs.prototype,
  "where",
  void 0
);
DeleteManyEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  DeleteManyEventArgs
);
exports.DeleteManyEventArgs = DeleteManyEventArgs;
