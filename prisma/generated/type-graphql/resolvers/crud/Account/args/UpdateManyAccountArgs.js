"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyMutationInput_1 = require("../../../inputs/AccountUpdateManyMutationInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
let UpdateManyAccountArgs = class UpdateManyAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        AccountUpdateManyMutationInput_1.AccountUpdateManyMutationInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      AccountUpdateManyMutationInput_1.AccountUpdateManyMutationInput
    ),
  ],
  UpdateManyAccountArgs.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountWhereInput_1.AccountWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput),
  ],
  UpdateManyAccountArgs.prototype,
  "where",
  void 0
);
UpdateManyAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateManyAccountArgs
);
exports.UpdateManyAccountArgs = UpdateManyAccountArgs;
