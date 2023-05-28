"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutEventsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutEventsInput_1 = require("../inputs/UserCreateOrConnectWithoutEventsInput");
const UserCreateWithoutEventsInput_1 = require("../inputs/UserCreateWithoutEventsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutEventsInput = class UserCreateNestedOneWithoutEventsInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateWithoutEventsInput_1.UserCreateWithoutEventsInput
    ),
  ],
  UserCreateNestedOneWithoutEventsInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        UserCreateOrConnectWithoutEventsInput_1.UserCreateOrConnectWithoutEventsInput,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      UserCreateOrConnectWithoutEventsInput_1.UserCreateOrConnectWithoutEventsInput
    ),
  ],
  UserCreateNestedOneWithoutEventsInput.prototype,
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
  UserCreateNestedOneWithoutEventsInput.prototype,
  "connect",
  void 0
);
UserCreateNestedOneWithoutEventsInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("UserCreateNestedOneWithoutEventsInput", {
      isAbstract: true,
    }),
  ],
  UserCreateNestedOneWithoutEventsInput
);
exports.UserCreateNestedOneWithoutEventsInput =
  UserCreateNestedOneWithoutEventsInput;
