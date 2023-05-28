"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenCreateInput_1 = require("../../../inputs/VerificationTokenCreateInput");
let CreateOneVerificationTokenArgs = class CreateOneVerificationTokenArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => VerificationTokenCreateInput_1.VerificationTokenCreateInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenCreateInput_1.VerificationTokenCreateInput
    ),
  ],
  CreateOneVerificationTokenArgs.prototype,
  "data",
  void 0
);
CreateOneVerificationTokenArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateOneVerificationTokenArgs
);
exports.CreateOneVerificationTokenArgs = CreateOneVerificationTokenArgs;
