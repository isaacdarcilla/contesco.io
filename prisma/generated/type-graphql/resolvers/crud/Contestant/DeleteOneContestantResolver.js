"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneContestantArgs_1 = require("./args/DeleteOneContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const helpers_1 = require("../../../helpers");
let DeleteOneContestantResolver = class DeleteOneContestantResolver {
  async deleteOneContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.delete({
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
      DeleteOneContestantArgs_1.DeleteOneContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  DeleteOneContestantResolver.prototype,
  "deleteOneContestant",
  null
);
DeleteOneContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  DeleteOneContestantResolver
);
exports.DeleteOneContestantResolver = DeleteOneContestantResolver;
