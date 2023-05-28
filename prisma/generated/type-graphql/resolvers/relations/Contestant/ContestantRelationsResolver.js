"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Contestant_1 = require("../../../models/Contestant");
const Event_1 = require("../../../models/Event");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ContestantRelationsResolver = class ContestantRelationsResolver {
  async event(contestant, ctx, info) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .contestant.findUniqueOrThrow({
        where: {
          id: contestant.id,
        },
      })
      .event({
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async user(contestant, ctx, info) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .contestant.findUniqueOrThrow({
        where: {
          id: contestant.id,
        },
      })
      .user({
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => Event_1.Event, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Contestant_1.Contestant,
      Object,
      Object,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantRelationsResolver.prototype,
  "event",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => User_1.User, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Contestant_1.Contestant,
      Object,
      Object,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  ContestantRelationsResolver.prototype,
  "user",
  null
);
ContestantRelationsResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Contestant_1.Contestant)],
  ContestantRelationsResolver
);
exports.ContestantRelationsResolver = ContestantRelationsResolver;
