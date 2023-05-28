"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneEventArgs_1 = require("./args/UpdateOneEventArgs");
const Event_1 = require("../../../models/Event");
const helpers_1 = require("../../../helpers");
let UpdateOneEventResolver = class UpdateOneEventResolver {
  async updateOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.update({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      UpdateOneEventArgs_1.UpdateOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UpdateOneEventResolver.prototype,
  "updateOneEvent",
  null
);
UpdateOneEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  UpdateOneEventResolver
);
exports.UpdateOneEventResolver = UpdateOneEventResolver;
