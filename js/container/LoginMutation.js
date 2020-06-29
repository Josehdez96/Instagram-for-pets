var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
var LOGIN = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation login($input: UserCredentials!) {\n    login(input: $input)\n  }\n"], ["\n  mutation login($input: UserCredentials!) {\n    login(input: $input)\n  }\n"])));
export var LoginMutation = function (_a) {
    var children = _a.children;
    return React.createElement(Mutation, { mutation: LOGIN }, children);
};
var templateObject_1;
