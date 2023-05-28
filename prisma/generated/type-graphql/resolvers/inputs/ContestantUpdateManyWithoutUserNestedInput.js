"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateManyUserInputEnvelope_1 = require("../inputs/ContestantCreateManyUserInputEnvelope");
const ContestantCreateOrConnectWithoutUserInput_1 = require("../inputs/ContestantCreateOrConnectWithoutUserInput");
const ContestantCreateWithoutUserInput_1 = require("../inputs/ContestantCreateWithoutUserInput");
const ContestantScalarWhereInput_1 = require("../inputs/ContestantScalarWhereInput");
const ContestantUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/ContestantUpdateManyWithWhereWithoutUserInput");
const ContestantUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ContestantUpdateWithWhereUniqueWithoutUserInput");
const ContestantUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ContestantUpsertWithWhereUniqueWithoutUserInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantUpdateManyWithoutUserNestedInput = class ContestantUpdateManyWithoutUserNestedInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateWithoutUserInput_1.ContestantCreateWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateOrConnectWithoutUserInput_1.ContestantCreateOrConnectWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantUpsertWithWhereUniqueWithoutUserInput_1.ContestantUpsertWithWhereUniqueWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "upsert",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateManyUserInputEnvelope_1.ContestantCreateManyUserInputEnvelope,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateManyUserInputEnvelope_1.ContestantCreateManyUserInputEnvelope
    ),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "createMany",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantWhereUniqueInput_1.ContestantWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "set",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantWhereUniqueInput_1.ContestantWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "disconnect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantWhereUniqueInput_1.ContestantWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "delete",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantWhereUniqueInput_1.ContestantWhereUniqueInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantUpdateWithWhereUniqueWithoutUserInput_1.ContestantUpdateWithWhereUniqueWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantUpdateManyWithWhereWithoutUserInput_1.ContestantUpdateManyWithWhereWithoutUserInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "updateMany",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [ContestantScalarWhereInput_1.ContestantScalarWhereInput],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutUserNestedInput.prototype,
  "deleteMany",
  void 0
);
ContestantUpdateManyWithoutUserNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpdateManyWithoutUserNestedInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpdateManyWithoutUserNestedInput
);
exports.ContestantUpdateManyWithoutUserNestedInput =
  ContestantUpdateManyWithoutUserNestedInput;
