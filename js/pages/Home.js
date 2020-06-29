import React from "react";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { Layout } from "../components/Layout";
var HomePage = function (_a) {
    var id = _a.id;
    return (React.createElement(Layout, null,
        React.createElement(ListOfCategories, null),
        React.createElement(ListOfPhotoCards, { categoryId: id })));
};
export var Home = React.memo(HomePage, function (prevProps, props) {
    return prevProps.categoryId === props.categoryId;
});
