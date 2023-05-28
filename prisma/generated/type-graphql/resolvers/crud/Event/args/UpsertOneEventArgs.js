"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateInput_1 = require("../../../inputs/EventCreateInput");
const EventUpdateInput_1 = require("../../../inputs/EventUpdateInput");
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
let UpsertOneEventArgs = class UpsertOneEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventWhereUniqueInput_1.EventWhereUniqueInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventWhereUniqueInput_1.EventWhereUniqueInput
    ),
  ],
  UpsertOneEventArgs.prototype,
  "where",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventCreateInput_1.EventCreateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", EventCreateInput_1.EventCreateInput),
  ],
  UpsertOneEventArgs.prototype,
  "create",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventUpdateInput_1.EventUpdateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", EventUpdateInput_1.EventUpdateInput),
  ],
  UpsertOneEventArgs.prototype,
  "update",
  void 0
);
UpsertOneEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpsertOneEventArgs
);
exports.UpsertOneEventArgs = UpsertOneEventArgs;
