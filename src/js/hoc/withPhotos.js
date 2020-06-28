var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
var GET_PHOTOS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getPhotos($categoryId: ID) {\n    photos(categoryId: $categoryId) {\n      id\n      categoryId\n      src\n      likes\n      userId\n      liked\n    }\n  }\n"], ["\n  query getPhotos($categoryId: ID) {\n    photos(categoryId: $categoryId) {\n      id\n      categoryId\n      src\n      likes\n      userId\n      liked\n    }\n  }\n"])));
export var withPhotos = graphql(GET_PHOTOS);
var templateObject_1;
