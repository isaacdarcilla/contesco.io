"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateManyMutationInput_1 = require("../../../inputs/EventUpdateManyMutationInput");
const EventWhereInput_1 = require("../../../inputs/EventWhereInput");
let UpdateManyEventArgs = class UpdateManyEventArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => EventUpdateManyMutationInput_1.EventUpdateManyMutationInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      EventUpdateManyMutationInput_1.EventUpdateManyMutationInput
    ),
  ],
  UpdateManyEventArgs.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => EventWhereInput_1.EventWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput),
  ],
  UpdateManyEventArgs.prototype,
  "where",
  void 0
);
UpdateManyEventArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateManyEventArgs
);
exports.UpdateManyEventArgs = UpdateManyEventArgs;
