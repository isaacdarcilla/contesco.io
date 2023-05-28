"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContestantCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ContestantCountAggregate = class ContestantCountAggregate {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "eventId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "firstName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "middleName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "lastName",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "gender",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "age",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "nationality",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "birthDate",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "phoneNumber",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "email",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "photo",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "createdAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "updatedAt",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", Number),
  ],
  ContestantCountAggregate.prototype,
  "_all",
  void 0
);
ContestantCountAggregate = tslib_1.__decorate(
  [
    TypeGraphQL.ObjectType("ContestantCountAggregate", {
      isAbstract: true,
    }),
  ],
  ContestantCountAggregate
);
exports.ContestantCountAggregate = ContestantCountAggregate;
