"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVerificationTokenOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenOrderByWithRelationInput_1 = require("../../../inputs/VerificationTokenOrderByWithRelationInput");
const VerificationTokenWhereInput_1 = require("../../../inputs/VerificationTokenWhereInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
const VerificationTokenScalarFieldEnum_1 = require("../../../../enums/VerificationTokenScalarFieldEnum");
let FindFirstVerificationTokenOrThrowArgs = class FindFirstVerificationTokenOrThrowArgs {};
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
  FindFirstVerificationTokenOrThrowArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        VerificationTokenOrderByWithRelationInput_1.VerificationTokenOrderByWithRelationInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindFirstVerificationTokenOrThrowArgs.prototype,
  "orderBy",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput
    ),
  ],
  FindFirstVerificationTokenOrThrowArgs.prototype,
  "cursor",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  FindFirstVerificationTokenOrThrowArgs.prototype,
  "take",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  FindFirstVerificationTokenOrThrowArgs.prototype,
  "skip",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        VerificationTokenScalarFieldEnum_1.VerificationTokenScalarFieldEnum,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  FindFirstVerificationTokenOrThrowArgs.prototype,
  "distinct",
  void 0
);
FindFirstVerificationTokenOrThrowArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  FindFirstVerificationTokenOrThrowArgs
);
exports.FindFirstVerificationTokenOrThrowArgs =
  FindFirstVerificationTokenOrThrowArgs;
