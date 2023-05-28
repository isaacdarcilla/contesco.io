"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EventScalarFieldEnum;
(function (EventScalarFieldEnum) {
  EventScalarFieldEnum["id"] = "id";
  EventScalarFieldEnum["userId"] = "userId";
  EventScalarFieldEnum["name"] = "name";
  EventScalarFieldEnum["description"] = "description";
  EventScalarFieldEnum["organizer"] = "organizer";
  EventScalarFieldEnum["type"] = "type";
  EventScalarFieldEnum["category"] = "category";
  EventScalarFieldEnum["tags"] = "tags";
  EventScalarFieldEnum["banner"] = "banner";
  EventScalarFieldEnum["slug"] = "slug";
  EventScalarFieldEnum["eventStarts"] = "eventStarts";
  EventScalarFieldEnum["eventEnds"] = "eventEnds";
  EventScalarFieldEnum["createdAt"] = "createdAt";
  EventScalarFieldEnum["updatedAt"] = "updatedAt";
})(
  (EventScalarFieldEnum =
    exports.EventScalarFieldEnum || (exports.EventScalarFieldEnum = {}))
);
TypeGraphQL.registerEnumType(EventScalarFieldEnum, {
  name: "EventScalarFieldEnum",
  description: undefined,
});
