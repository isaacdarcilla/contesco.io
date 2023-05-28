"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyContestantArgs_1 = require("./args/UpdateManyContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyContestantResolver = class UpdateManyContestantResolver {
  async updateManyContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.updateMany({
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
      UpdateManyContestantArgs_1.UpdateManyContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UpdateManyContestantResolver.prototype,
  "updateManyContestant",
  null
);
UpdateManyContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  UpdateManyContestantResolver
);
exports.UpdateManyContestantResolver = UpdateManyContestantResolver;
