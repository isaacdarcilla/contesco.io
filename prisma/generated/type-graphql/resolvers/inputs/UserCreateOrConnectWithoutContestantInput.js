"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutContestantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutContestantInput_1 = require("../inputs/UserCreateWithoutContestantInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutContestantInput = class UserCreateOrConnectWithoutContestantInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserWhereUniqueInput_1.UserWhereUniqueInput, {
      nullable: false,
    }),
    tslib_1.__metadata(
      "design:type",
      UserWhereUniqueInput_1.UserWhereUniqueInput
    ),
  ],
  UserCreateOrConnectWithoutContestantInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput
    ),
  ],
  UserCreateOrConnectWithoutContestantInput.prototype,
  "create",
  void 0
);
UserCreateOrConnectWithoutContestantInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateOrConnectWithoutContestantInput", {
      isAbstract: true,
    }),
  ],
  UserCreateOrConnectWithoutContestantInput
);
exports.UserCreateOrConnectWithoutContestantInput =
  UserCreateOrConnectWithoutContestantInput;
