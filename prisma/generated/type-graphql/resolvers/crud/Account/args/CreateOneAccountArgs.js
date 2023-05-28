"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateInput_1 = require("../../../inputs/AccountCreateInput");
let CreateOneAccountArgs = class CreateOneAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountCreateInput_1.AccountCreateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", AccountCreateInput_1.AccountCreateInput),
  ],
  CreateOneAccountArgs.prototype,
  "data",
  void 0
);
CreateOneAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateOneAccountArgs
);
exports.CreateOneAccountArgs = CreateOneAccountArgs;
