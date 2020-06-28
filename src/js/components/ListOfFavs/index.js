import React from "react";
import { Image, Link, Grid } from "./style";
import PropTypes from "prop-types";
export var ListOfFavs = function (_a) {
    var _b = _a.favs, favs = _b === void 0 ? [] : _b;
    return (React.createElement(Grid, null, favs.map(function (fav) { return (React.createElement(Link, { key: fav.id, to: "/detail/" + fav.id },
        React.createElement(Image, { src: fav.src }))); })));
};
ListOfFavs.propTypes = {
    favs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
    })),
};
