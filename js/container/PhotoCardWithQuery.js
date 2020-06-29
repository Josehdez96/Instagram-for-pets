var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
var GET_SINGLE_PHOTO = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getSinglePhoto($id: ID!) {\n    photo(id: $id) {\n      id\n      categoryId\n      src\n      likes\n      liked\n      userId\n    }\n  }\n"], ["\n  query getSinglePhoto($id: ID!) {\n    photo(id: $id) {\n      id\n      categoryId\n      src\n      likes\n      liked\n      userId\n    }\n  }\n"])));
var renderProp = function (_a) {
    var loading = _a.loading, error = _a.error, _b = _a.data, data = _b === void 0 ? { photo: {} } : _b;
    if (loading)
        return React.createElement("p", null, "Loading...");
    if (error)
        return React.createElement("p", null, "Error!");
    var _c = data.photo, photo = _c === void 0 ? {} : _c;
    return React.createElement(PhotoCard, __assign({}, photo));
};
export var PhotoCardWithQuery = function (_a) {
    var id = _a.id;
    return (React.createElement(Query, { query: GET_SINGLE_PHOTO, variables: { id: id } }, renderProp));
};
var templateObject_1;
