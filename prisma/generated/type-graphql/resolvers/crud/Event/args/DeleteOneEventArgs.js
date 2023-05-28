"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
let DeleteOneEventArgs = class DeleteOneEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventWhereUniqueInput_1.EventWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventWhereUniqueInput_1.EventWhereUniqueInput
    ),
  ],
  DeleteOneEventArgs.prototype,
  "where",
  void 0
);
DeleteOneEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  DeleteOneEventArgs
);
exports.DeleteOneEventArgs = DeleteOneEventArgs;
