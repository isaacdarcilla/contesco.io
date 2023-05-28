"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneEventArgs_1 = require("./args/CreateOneEventArgs");
const Event_1 = require("../../../models/Event");
const helpers_1 = require("../../../helpers");
let CreateOneEventResolver = class CreateOneEventResolver {
  async createOneEvent(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.create({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Mutation((_returns) => Event_1.Event, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      CreateOneEventArgs_1.CreateOneEventArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  CreateOneEventResolver.prototype,
  "createOneEvent",
  null
);
CreateOneEventResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  CreateOneEventResolver
);
exports.CreateOneEventResolver = CreateOneEventResolver;
