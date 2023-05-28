"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenUpdateInput_1 = require("../../../inputs/VerificationTokenUpdateInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let UpdateOneVerificationTokenArgs = class UpdateOneVerificationTokenArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => VerificationTokenUpdateInput_1.VerificationTokenUpdateInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenUpdateInput_1.VerificationTokenUpdateInput
    ),
  ],
  UpdateOneVerificationTokenArgs.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput
    ),
  ],
  UpdateOneVerificationTokenArgs.prototype,
  "where",
  void 0
);
UpdateOneVerificationTokenArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateOneVerificationTokenArgs
);
exports.UpdateOneVerificationTokenArgs = UpdateOneVerificationTokenArgs;
