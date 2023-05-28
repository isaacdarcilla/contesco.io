"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateInput_1 = require("../../../inputs/SessionCreateInput");
const SessionUpdateInput_1 = require("../../../inputs/SessionUpdateInput");
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let UpsertOneSessionArgs = class UpsertOneSessionArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => SessionWhereUniqueInput_1.SessionWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionWhereUniqueInput_1.SessionWhereUniqueInput
    ),
  ],
  UpsertOneSessionArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SessionCreateInput_1.SessionCreateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", SessionCreateInput_1.SessionCreateInput),
  ],
  UpsertOneSessionArgs.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SessionUpdateInput_1.SessionUpdateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", SessionUpdateInput_1.SessionUpdateInput),
  ],
  UpsertOneSessionArgs.prototype,
  "update",
  void 0
);
UpsertOneSessionArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpsertOneSessionArgs
);
exports.UpsertOneSessionArgs = UpsertOneSessionArgs;
