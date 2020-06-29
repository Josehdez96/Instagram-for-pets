var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { ListOfFavs } from "../components/ListOfFavs";
var GET_FAVS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getFavs {\n    favs {\n      id\n      categoryId\n      src\n      likes\n      userId\n    }\n  }\n"], ["\n  query getFavs {\n    favs {\n      id\n      categoryId\n      src\n      likes\n      userId\n    }\n  }\n"])));
var renderProp = function (_a) {
    var loading = _a.loading, error = _a.error, data = _a.data;
    if (loading) {
        return React.createElement("p", null, "Loading...");
    }
    if (error) {
        console.error(error);
        return React.createElement("p", null, "Error!");
    }
    var favs = data.favs;
    return React.createElement(ListOfFavs, { favs: favs });
};
export var FavsWithQuery = function () { return (React.createElement(Query, { query: GET_FAVS, fetchPolicy: "network-only" }, renderProp)); };
var templateObject_1;
