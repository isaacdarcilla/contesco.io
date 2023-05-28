"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventWhereUniqueInput = class EventWhereUniqueInput {};
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventWhereUniqueInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", String),
  ],
  EventWhereUniqueInput.prototype,
  "slug",
  void 0
);
EventWhereUniqueInput = tslib_1.__decorate(
  [
    TypeGraphQL.InputType("EventWhereUniqueInput", {
      isAbstract: true,
    }),
  ],
  EventWhereUniqueInput
);
exports.EventWhereUniqueInput = EventWhereUniqueInput;
