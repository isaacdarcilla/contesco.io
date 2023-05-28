"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantUpdateManyWithoutEventNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContestantCreateManyEventInputEnvelope_1 = require("../inputs/ContestantCreateManyEventInputEnvelope");
const ContestantCreateOrConnectWithoutEventInput_1 = require("../inputs/ContestantCreateOrConnectWithoutEventInput");
const ContestantCreateWithoutEventInput_1 = require("../inputs/ContestantCreateWithoutEventInput");
const ContestantScalarWhereInput_1 = require("../inputs/ContestantScalarWhereInput");
const ContestantUpdateManyWithWhereWithoutEventInput_1 = require("../inputs/ContestantUpdateManyWithWhereWithoutEventInput");
const ContestantUpdateWithWhereUniqueWithoutEventInput_1 = require("../inputs/ContestantUpdateWithWhereUniqueWithoutEventInput");
const ContestantUpsertWithWhereUniqueWithoutEventInput_1 = require("../inputs/ContestantUpsertWithWhereUniqueWithoutEventInput");
const ContestantWhereUniqueInput_1 = require("../inputs/ContestantWhereUniqueInput");
let ContestantUpdateManyWithoutEventNestedInput = class ContestantUpdateManyWithoutEventNestedInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateWithoutEventInput_1.ContestantCreateWithoutEventInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutEventNestedInput.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantCreateOrConnectWithoutEventInput_1.ContestantCreateOrConnectWithoutEventInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutEventNestedInput.prototype,
  "connectOrCreate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantUpsertWithWhereUniqueWithoutEventInput_1.ContestantUpsertWithWhereUniqueWithoutEventInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutEventNestedInput.prototype,
  "upsert",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        ContestantCreateManyEventInputEnvelope_1.ContestantCreateManyEventInputEnvelope,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      ContestantCreateManyEventInputEnvelope_1.ContestantCreateManyEventInputEnvelope
    ),
  ],
  ContestantUpdateManyWithoutEventNestedInput.prototype,
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
  ContestantUpdateManyWithoutEventNestedInput.prototype,
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
  ContestantUpdateManyWithoutEventNestedInput.prototype,
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
  ContestantUpdateManyWithoutEventNestedInput.prototype,
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
  ContestantUpdateManyWithoutEventNestedInput.prototype,
  "connect",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantUpdateWithWhereUniqueWithoutEventInput_1.ContestantUpdateWithWhereUniqueWithoutEventInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutEventNestedInput.prototype,
  "update",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => [
        ContestantUpdateManyWithWhereWithoutEventInput_1.ContestantUpdateManyWithWhereWithoutEventInput,
      ],
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata("design:type", Array),
  ],
  ContestantUpdateManyWithoutEventNestedInput.prototype,
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
  ContestantUpdateManyWithoutEventNestedInput.prototype,
  "deleteMany",
  void 0
);
ContestantUpdateManyWithoutEventNestedInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("ContestantUpdateManyWithoutEventNestedInput", {
      isAbstract: true,
    }),
  ],
  ContestantUpdateManyWithoutEventNestedInput
);
exports.ContestantUpdateManyWithoutEventNestedInput =
  ContestantUpdateManyWithoutEventNestedInput;
