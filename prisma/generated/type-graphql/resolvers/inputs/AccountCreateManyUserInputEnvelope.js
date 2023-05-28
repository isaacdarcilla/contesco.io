"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateManyUserInput_1 = require("../inputs/AccountCreateManyUserInput");
let AccountCreateManyUserInputEnvelope = class AccountCreateManyUserInputEnvelope {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [AccountCreateManyUserInput_1.AccountCreateManyUserInput],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  AccountCreateManyUserInputEnvelope.prototype,
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
  AccountCreateManyUserInputEnvelope.prototype,
  "skipDuplicates",
  void 0
);
AccountCreateManyUserInputEnvelope = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("AccountCreateManyUserInputEnvelope", {
      isAbstract: true,
    }),
  ],
  AccountCreateManyUserInputEnvelope
);
exports.AccountCreateManyUserInputEnvelope = AccountCreateManyUserInputEnvelope;
