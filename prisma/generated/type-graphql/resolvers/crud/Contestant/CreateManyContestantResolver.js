"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyContestantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyContestantArgs_1 = require("./args/CreateManyContestantArgs");
const Contestant_1 = require("../../../models/Contestant");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyContestantResolver = class CreateManyContestantResolver {
  async createManyContestant(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).contestant.createMany({
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
      CreateManyContestantArgs_1.CreateManyContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  CreateManyContestantResolver.prototype,
  "createManyContestant",
  null
);
CreateManyContestantResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  CreateManyContestantResolver
);
exports.CreateManyContestantResolver = CreateManyContestantResolver;
