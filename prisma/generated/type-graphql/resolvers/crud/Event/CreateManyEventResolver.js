"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyEventArgs_1 = require("./args/CreateManyEventArgs");
const Event_1 = require("../../../models/Event");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyEventResolver = class CreateManyEventResolver {
  async createManyEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.createMany({
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
      CreateManyEventArgs_1.CreateManyEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  CreateManyEventResolver.prototype,
  "createManyEvent",
  null
);
CreateManyEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  CreateManyEventResolver
);
exports.CreateManyEventResolver = CreateManyEventResolver;
