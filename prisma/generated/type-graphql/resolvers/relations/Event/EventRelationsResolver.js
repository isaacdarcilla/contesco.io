"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Contestant_1 = require("../../../models/Contestant");
const Event_1 = require("../../../models/Event");
const User_1 = require("../../../models/User");
const EventContestantsArgs_1 = require("./args/EventContestantsArgs");
const helpers_1 = require("../../../helpers");
let EventRelationsResolver = class EventRelationsResolver {
  async contestants(event, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .event.findUniqueOrThrow({
        where: {
          id: event.id,
        },
      })
      .contestants({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async user(event, ctx, info) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .event.findUniqueOrThrow({
        where: {
          id: event.id,
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
    TypeGraphQL.FieldResolver((_type) => [Contestant_1.Contestant], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Event_1.Event,
      Object,
      Object,
      EventContestantsArgs_1.EventContestantsArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventRelationsResolver.prototype,
  "contestants",
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
    tslib_1.__metadata("design:paramtypes", [Event_1.Event, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  EventRelationsResolver.prototype,
  "user",
  null
);
EventRelationsResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Event_1.Event)],
  EventRelationsResolver
);
exports.EventRelationsResolver = EventRelationsResolver;
