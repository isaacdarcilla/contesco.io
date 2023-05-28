"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Contestant_1 = require("../../../models/Contestant");
const Event_1 = require("../../../models/Event");
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const UserAccountsArgs_1 = require("./args/UserAccountsArgs");
const UserContestantArgs_1 = require("./args/UserContestantArgs");
const UserEventsArgs_1 = require("./args/UserEventsArgs");
const UserSessionsArgs_1 = require("./args/UserSessionsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
  async accounts(user, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .accounts({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async sessions(user, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .sessions({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async events(user, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .events({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
  async Contestant(user, ctx, info, args) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .Contestant({
        ...args,
        ...(_count &&
          (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
      });
  }
};
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => [Account_1.Account], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      User_1.User,
      Object,
      Object,
      UserAccountsArgs_1.UserAccountsArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UserRelationsResolver.prototype,
  "accounts",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => [Session_1.Session], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      User_1.User,
      Object,
      Object,
      UserSessionsArgs_1.UserSessionsArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UserRelationsResolver.prototype,
  "sessions",
  null
);
tslib_1.__decorate(
  [
    TypeGraphQL.FieldResolver((_type) => [Event_1.Event], {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      User_1.User,
      Object,
      Object,
      UserEventsArgs_1.UserEventsArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UserRelationsResolver.prototype,
  "events",
  null
);
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
      User_1.User,
      Object,
      Object,
      UserContestantArgs_1.UserContestantArgs,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  UserRelationsResolver.prototype,
  "Contestant",
  null
);
UserRelationsResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => User_1.User)],
  UserRelationsResolver
);
exports.UserRelationsResolver = UserRelationsResolver;
