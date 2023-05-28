"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateInput_1 = require("../../../inputs/EventUpdateInput");
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
let UpdateOneEventArgs = class UpdateOneEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventUpdateInput_1.EventUpdateInput, {
      nullable: false,
    }),
    tslib_1.__metadata("design:type", EventUpdateInput_1.EventUpdateInput),
  ],
  UpdateOneEventArgs.prototype,
  "data",
  void 0
);
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
  UpdateOneEventArgs.prototype,
  "where",
  void 0
);
UpdateOneEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateOneEventArgs
);
exports.UpdateOneEventArgs = UpdateOneEventArgs;
