"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenUpdateManyMutationInput_1 = require("../../../inputs/VerificationTokenUpdateManyMutationInput");
const VerificationTokenWhereInput_1 = require("../../../inputs/VerificationTokenWhereInput");
let UpdateManyVerificationTokenArgs = class UpdateManyVerificationTokenArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenUpdateManyMutationInput_1.VerificationTokenUpdateManyMutationInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenUpdateManyMutationInput_1.VerificationTokenUpdateManyMutationInput
    ),
  ],
  UpdateManyVerificationTokenArgs.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => VerificationTokenWhereInput_1.VerificationTokenWhereInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenWhereInput_1.VerificationTokenWhereInput
    ),
  ],
  UpdateManyVerificationTokenArgs.prototype,
  "where",
  void 0
);
UpdateManyVerificationTokenArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateManyVerificationTokenArgs
);
exports.UpdateManyVerificationTokenArgs = UpdateManyVerificationTokenArgs;
