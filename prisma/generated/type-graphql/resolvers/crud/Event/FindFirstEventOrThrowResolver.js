"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEventOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstEventOrThrowArgs_1 = require("./args/FindFirstEventOrThrowArgs");
const Event_1 = require("../../../models/Event");
const helpers_1 = require("../../../helpers");
let FindFirstEventOrThrowResolver = class FindFirstEventOrThrowResolver {
  async findFirstEventOrThrow(ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx).event.findFirstOrThrow({
      ...args,
      ...(_count &&
        (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
    });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.Query((_returns) => Event_1.Event, {
      nullable: true,
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Object,
      Object,
      FindFirstEventOrThrowArgs_1.FindFirstEventOrThrowArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  FindFirstEventOrThrowResolver.prototype,
  "findFirstEventOrThrow",
  null
);
FindFirstEventOrThrowResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  FindFirstEventOrThrowResolver
);
exports.FindFirstEventOrThrowResolver = FindFirstEventOrThrowResolver;
