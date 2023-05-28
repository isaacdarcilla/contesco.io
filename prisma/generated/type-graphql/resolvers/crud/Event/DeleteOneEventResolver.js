"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneEventArgs_1 = require("./args/DeleteOneEventArgs");
const Event_1 = require("../../../models/Event");
const helpers_1 = require("../../../helpers");
let DeleteOneEventResolver = class DeleteOneEventResolver {
  async deleteOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.delete({
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
      DeleteOneEventArgs_1.DeleteOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  DeleteOneEventResolver.prototype,
  "deleteOneEvent",
  null
);
DeleteOneEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  DeleteOneEventResolver
);
exports.DeleteOneEventResolver = DeleteOneEventResolver;
