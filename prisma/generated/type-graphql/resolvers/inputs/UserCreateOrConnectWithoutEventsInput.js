"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutEventsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutEventsInput_1 = require("../inputs/UserCreateWithoutEventsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutEventsInput = class UserCreateOrConnectWithoutEventsInput {};
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
  UserCreateOrConnectWithoutEventsInput.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput
    ),
  ],
  UserCreateOrConnectWithoutEventsInput.prototype,
  "create",
  void 0
);
UserCreateOrConnectWithoutEventsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateOrConnectWithoutEventsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateOrConnectWithoutEventsInput
);
exports.UserCreateOrConnectWithoutEventsInput =
  UserCreateOrConnectWithoutEventsInput;
