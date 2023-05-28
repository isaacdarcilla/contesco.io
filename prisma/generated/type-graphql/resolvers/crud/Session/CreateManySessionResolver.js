"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManySessionArgs_1 = require("./args/CreateManySessionArgs");
const Session_1 = require("../../../models/Session");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySessionResolver = class CreateManySessionResolver {
  async createManySession(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).session.createMany({
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
      CreateManySessionArgs_1.CreateManySessionArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  CreateManySessionResolver.prototype,
  "createManySession",
  null
);
CreateManySessionResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  CreateManySessionResolver
);
exports.CreateManySessionResolver = CreateManySessionResolver;
