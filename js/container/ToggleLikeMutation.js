var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
var LIKE_PHOTO = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation likePhoto($input: LikePhoto!) {\n    likePhoto(input: $input) {\n      id\n      liked\n      likes\n    }\n  }\n"], ["\n  mutation likePhoto($input: LikePhoto!) {\n    likePhoto(input: $input) {\n      id\n      liked\n      likes\n    }\n  }\n"])));
export var ToggleLikeMutation = function (_a) {
    var children = _a.children;
    return React.createElement(Mutation, { mutation: LIKE_PHOTO }, children);
};
var templateObject_1;
