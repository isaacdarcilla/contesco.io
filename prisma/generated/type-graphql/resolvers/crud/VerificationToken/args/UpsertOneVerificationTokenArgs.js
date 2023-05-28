"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenCreateInput_1 = require("../../../inputs/VerificationTokenCreateInput");
const VerificationTokenUpdateInput_1 = require("../../../inputs/VerificationTokenUpdateInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let UpsertOneVerificationTokenArgs = class UpsertOneVerificationTokenArgs {};
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
  UpsertOneVerificationTokenArgs.prototype,
  "where",
  void 0
);
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
  UpsertOneVerificationTokenArgs.prototype,
  "create",
  void 0
);
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
  UpsertOneVerificationTokenArgs.prototype,
  "update",
  void 0
);
UpsertOneVerificationTokenArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpsertOneVerificationTokenArgs
);
exports.UpsertOneVerificationTokenArgs = UpsertOneVerificationTokenArgs;
