"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateContestantArgs_1 = require("./args/AggregateContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const AggregateContestant_1 = require("../../outputs/AggregateContestant");
const helpers_1 = require("../../../helpers");
let AggregateContestantResolver = class AggregateContestantResolver {
  async aggregateContestant(ctx, info, args) {
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.aggregate({
      ...args,
      ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => AggregateContestant_1.AggregateContestant, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      AggregateContestantArgs_1.AggregateContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  AggregateContestantResolver.prototype,
  "aggregateContestant",
  null
);
AggregateContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  AggregateContestantResolver
);
exports.AggregateContestantResolver = AggregateContestantResolver;
