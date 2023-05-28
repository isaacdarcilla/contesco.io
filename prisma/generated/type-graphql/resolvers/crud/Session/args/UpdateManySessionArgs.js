"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUpdateManyMutationInput_1 = require("../../../inputs/SessionUpdateManyMutationInput");
const SessionWhereInput_1 = require("../../../inputs/SessionWhereInput");
let UpdateManySessionArgs = class UpdateManySessionArgs {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) =>
        SessionUpdateManyMutationInput_1.SessionUpdateManyMutationInput,
      {
        nullable: false,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      SessionUpdateManyMutationInput_1.SessionUpdateManyMutationInput
    ),
  ],
  UpdateManySessionArgs.prototype,
  "data",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => SessionWhereInput_1.SessionWhereInput, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", SessionWhereInput_1.SessionWhereInput),
  ],
  UpdateManySessionArgs.prototype,
  "where",
  void 0
);
UpdateManySessionArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  UpdateManySessionArgs
);
exports.UpdateManySessionArgs = UpdateManySessionArgs;
