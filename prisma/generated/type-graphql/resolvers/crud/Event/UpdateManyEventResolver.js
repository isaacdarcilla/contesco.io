"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyEventArgs_1 = require("./args/UpdateManyEventArgs");
const Event_1 = require("../../../models/Event");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEventResolver = class UpdateManyEventResolver {
  async updateManyEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.updateMany({
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
      UpdateManyEventArgs_1.UpdateManyEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UpdateManyEventResolver.prototype,
  "updateManyEvent",
  null
);
UpdateManyEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  UpdateManyEventResolver
);
exports.UpdateManyEventResolver = UpdateManyEventResolver;
