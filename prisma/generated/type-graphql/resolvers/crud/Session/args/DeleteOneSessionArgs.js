"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let DeleteOneSessionArgs = class DeleteOneSessionArgs {};
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
  DeleteOneSessionArgs.prototype,
  "where",
  void 0
);
DeleteOneSessionArgs = tslib_1.__decorate(
  [TypeGraphQL.ArgsType()],
  DeleteOneSessionArgs
);
exports.DeleteOneSessionArgs = DeleteOneSessionArgs;
