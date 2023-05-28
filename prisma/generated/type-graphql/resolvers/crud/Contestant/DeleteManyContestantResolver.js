"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyContestantArgs_1 = require("./args/DeleteManyContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyContestantResolver = class DeleteManyContestantResolver {
  async deleteManyContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.deleteMany({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation(
      (_returns) => AffectedRowsOutput_1.AffectedRowsOutput,
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
      DeleteManyContestantArgs_1.DeleteManyContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  DeleteManyContestantResolver.prototype,
  "deleteManyContestant",
  null
);
DeleteManyContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  DeleteManyContestantResolver
);
exports.DeleteManyContestantResolver = DeleteManyContestantResolver;
