"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let SessionRelationsResolver = class SessionRelationsResolver {
  async user(session, ctx, info) {
    const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
    return (0, helpers_1.getPrismaFromContext)(ctx)
      .session.findUniqueOrThrow({
        where: {
          id: session.id,
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
    TypeGraphQL.FieldResolver((_type) => User_1.User, {
      nullable: false,
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [
      Session_1.Session,
      Object,
      Object,
    ]),
    tslib_1.__metadata("design:returntype", Promise),
  ],
  SessionRelationsResolver.prototype,
  "user",
  null
);
SessionRelationsResolver = tslib_1.__decorate(
  [TypeGraphQL.Resolver((_of) => Session_1.Session)],
  SessionRelationsResolver
);
exports.SessionRelationsResolver = SessionRelationsResolver;
