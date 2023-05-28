"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateVerificationTokenArgs_1 = require("./args/AggregateVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const AggregateVerificationToken_1 = require("../../outputs/AggregateVerificationToken");
const helpers_1 = require("../../../helpers");
let AggregateVerificationTokenResolver = class AggregateVerificationTokenResolver {
  async aggregateVerificationToken(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.aggregate(
      {
        ...args,
        ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
      }
    );
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query(
      (_returns) => AggregateVerificationToken_1.AggregateVerificationToken,
      {
        nullable: false,
      }
    ),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateVerificationTokenArgs_1.AggregateVerificationTokenArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AggregateVerificationTokenResolver.prototype,
  "aggregateVerificationToken",
  null
);
AggregateVerificationTokenResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => VerificationToken_1.VerificationToken)],
  AggregateVerificationTokenResolver
);
exports.AggregateVerificationTokenResolver = AggregateVerificationTokenResolver;
