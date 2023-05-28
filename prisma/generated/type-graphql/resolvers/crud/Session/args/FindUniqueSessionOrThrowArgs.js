"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSessionOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let FindUniqueSessionOrThrowArgs = class FindUniqueSessionOrThrowArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => SessionWhereUniqueInput_1.SessionWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionWhereUniqueInput_1.SessionWhereUniqueInput
    ),
  ],
  FindUniqueSessionOrThrowArgs.prototype,
  "where",
  void 0
);
FindUniqueSessionOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindUniqueSessionOrThrowArgs
);
exports.FindUniqueSessionOrThrowArgs = FindUniqueSessionOrThrowArgs;
