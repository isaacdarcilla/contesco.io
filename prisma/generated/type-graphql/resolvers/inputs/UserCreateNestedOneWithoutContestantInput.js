"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutContestantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutContestantInput_1 = require("../inputs/UserCreateOrConnectWithoutContestantInput");
const UserCreateWithoutContestantInput_1 = require("../inputs/UserCreateWithoutContestantInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutContestantInput = class UserCreateNestedOneWithoutContestantInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutContestantInput_1.UserCreateWithoutContestantInput
    ),
  ],
  UserCreateNestedOneWithoutContestantInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateOrConnectWithoutContestantInput_1.UserCreateOrConnectWithoutContestantInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateOrConnectWithoutContestantInput_1.UserCreateOrConnectWithoutContestantInput
    ),
  ],
  UserCreateNestedOneWithoutContestantInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => UserWhereUniqueInput_1.UserWhereUniqueInput, {
      nullable: true,
    }),
    tslib_1.__metadata(
      "design:type",
      UserWhereUniqueInput_1.UserWhereUniqueInput
    ),
  ],
  UserCreateNestedOneWithoutContestantInput.prototype,
  "connect",
  void 0
);
UserCreateNestedOneWithoutContestantInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateNestedOneWithoutContestantInput", {
      isAbstract: true,
    }),
  ],
  UserCreateNestedOneWithoutContestantInput
);
exports.UserCreateNestedOneWithoutContestantInput =
  UserCreateNestedOneWithoutContestantInput;
