var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
var REGISTER = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation singup($input: UserCredentials!) {\n    signup(input: $input)\n  }\n"], ["\n  mutation singup($input: UserCredentials!) {\n    signup(input: $input)\n  }\n"])));
export var RegisterMutation = function (_a) {
    var children = _a.children;
    return React.createElement(Mutation, { mutation: REGISTER }, children);
};
var templateObject_1;
