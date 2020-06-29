import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Div, Title, Subtitle } from "./styles";
export var Layout = function (_a) {
    var children = _a.children, title = _a.title, subtitle = _a.subtitle;
    return (React.createElement(Fragment, null,
        React.createElement(Helmet, null,
            title && React.createElement("title", null,
                title,
                "| Petgram"),
            subtitle && React.createElement("meta", { name: "description", content: subtitle })),
        React.createElement(Div, null,
            title && React.createElement(Title, null, title),
            subtitle && React.createElement(Subtitle, null, subtitle),
            children)));
};
