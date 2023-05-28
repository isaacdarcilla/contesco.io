"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
let FindUniqueEventArgs = class FindUniqueEventArgs {};
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
  FindUniqueEventArgs.prototype,
  "where",
  void 0
);
FindUniqueEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindUniqueEventArgs
);
exports.FindUniqueEventArgs = FindUniqueEventArgs;
