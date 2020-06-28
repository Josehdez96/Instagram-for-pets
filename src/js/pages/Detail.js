import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";
export default (function (_a) {
    var detailId = _a.detailId;
    return (React.createElement(Layout, { title: "Fotografi\u00EDa " + detailId },
        React.createElement(PhotoCardWithQuery, { id: detailId })));
});
