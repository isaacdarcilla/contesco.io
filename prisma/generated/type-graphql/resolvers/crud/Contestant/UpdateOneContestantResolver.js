"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneContestantArgs_1 = require("./args/UpdateOneContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const helpers_1 = require("../../../helpers");
let UpdateOneContestantResolver = class UpdateOneContestantResolver {
  async updateOneContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.update({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Contestant_1.Contestant, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateOneContestantArgs_1.UpdateOneContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UpdateOneContestantResolver.prototype,
  "updateOneContestant",
  null
);
UpdateOneContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  UpdateOneContestantResolver
);
exports.UpdateOneContestantResolver = UpdateOneContestantResolver;
