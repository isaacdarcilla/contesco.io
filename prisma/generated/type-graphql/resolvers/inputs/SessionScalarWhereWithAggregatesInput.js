"use strict";
var SessionScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let SessionScalarWhereWithAggregatesInput =
  (SessionScalarWhereWithAggregatesInput_1 = class SessionScalarWhereWithAggregatesInput {});
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [SessionScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionScalarWhereWithAggregatesInput.prototype,
  "AND",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [SessionScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionScalarWhereWithAggregatesInput.prototype,
  "OR",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field((_type) => [SessionScalarWhereWithAggregatesInput_1], {
      nullable: true,
    }),
    tslib_1.__metadata("design:type", Array),
  ],
  SessionScalarWhereWithAggregatesInput.prototype,
  "NOT",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  SessionScalarWhereWithAggregatesInput.prototype,
  "id",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  SessionScalarWhereWithAggregatesInput.prototype,
  "sessionToken",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => StringWithAggregatesFilter_1.StringWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      StringWithAggregatesFilter_1.StringWithAggregatesFilter
    ),
  ],
  SessionScalarWhereWithAggregatesInput.prototype,
  "userId",
  void 0
);
tslib_1.__decorate(
  [
    TypeGraphQL.Field(
      (_type) => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter,
      {
        nullable: true,
      }
    ),
    tslib_1.__metadata(
      "design:type",
      DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter
    ),
  ],
  SessionScalarWhereWithAggregatesInput.prototype,
  "expires",
  void 0
);
SessionScalarWhereWithAggregatesInput =
  SessionScalarWhereWithAggregatesInput_1 = tslib_1.__decorate(
    [
      TypeGraphQL.InputType("SessionScalarWhereWithAggregatesInput", {
        isAbstract: true,
      }),
    ],
    SessionScalarWhereWithAggregatesInput
  );
exports.SessionScalarWhereWithAggregatesInput =
  SessionScalarWhereWithAggregatesInput;
