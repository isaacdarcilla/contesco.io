"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAccountOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let FindUniqueAccountOrThrowArgs = class FindUniqueAccountOrThrowArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => AccountWhereUniqueInput_1.AccountWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountWhereUniqueInput_1.AccountWhereUniqueInput
    ),
  ],
  FindUniqueAccountOrThrowArgs.prototype,
  "where",
  void 0
);
FindUniqueAccountOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindUniqueAccountOrThrowArgs
);
exports.FindUniqueAccountOrThrowArgs = FindUniqueAccountOrThrowArgs;
