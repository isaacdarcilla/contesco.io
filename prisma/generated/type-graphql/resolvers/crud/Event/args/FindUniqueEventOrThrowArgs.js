"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEventOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
let FindUniqueEventOrThrowArgs = class FindUniqueEventOrThrowArgs {};
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
  FindUniqueEventOrThrowArgs.prototype,
  "where",
  void 0
);
FindUniqueEventOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindUniqueEventOrThrowArgs
);
exports.FindUniqueEventOrThrowArgs = FindUniqueEventOrThrowArgs;
