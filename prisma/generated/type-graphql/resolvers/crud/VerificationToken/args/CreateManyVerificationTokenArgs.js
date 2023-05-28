"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenCreateManyInput_1 = require("../../../inputs/VerificationTokenCreateManyInput");
let CreateManyVerificationTokenArgs = class CreateManyVerificationTokenArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        VerificationTokenCreateManyInput_1.VerificationTokenCreateManyInput,
      ],
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  CreateManyVerificationTokenArgs.prototype,
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
  CreateManyVerificationTokenArgs.prototype,
  "skipDuplicates",
  void 0
);
CreateManyVerificationTokenArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  CreateManyVerificationTokenArgs
);
exports.CreateManyVerificationTokenArgs = CreateManyVerificationTokenArgs;
