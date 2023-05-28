"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateInput_1 = require("../../../inputs/AccountUpdateInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let UpdateOneAccountArgs = class UpdateOneAccountArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => AccountUpdateInput_1.AccountUpdateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", AccountUpdateInput_1.AccountUpdateInput),
  ],
  UpdateOneAccountArgs.prototype,
  "data",
  void 0
);
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
  UpdateOneAccountArgs.prototype,
  "where",
  void 0
);
UpdateOneAccountArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateOneAccountArgs
);
exports.UpdateOneAccountArgs = UpdateOneAccountArgs;
