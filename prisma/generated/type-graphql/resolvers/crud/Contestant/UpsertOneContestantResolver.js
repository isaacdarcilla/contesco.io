"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneContestantArgs_1 = require("./args/UpsertOneContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const helpers_1 = require("../../../helpers");
let UpsertOneContestantResolver = class UpsertOneContestantResolver {
  async upsertOneContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.upsert({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Contestant_1.Contestant, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpsertOneContestantArgs_1.UpsertOneContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UpsertOneContestantResolver.prototype,
  "upsertOneContestant",
  null
);
UpsertOneContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  UpsertOneContestantResolver
);
exports.UpsertOneContestantResolver = UpsertOneContestantResolver;
