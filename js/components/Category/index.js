import React from "react";
import { Link, Image } from "./styles";
var DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";
export var Category = function (_a) {
    var _b = _a.cover, cover = _b === void 0 ? DEFAULT_IMAGE : _b, _c = _a.path, path = _c === void 0 ? "#" : _c, _d = _a.emoji, emoji = _d === void 0 ? "?" : _d;
    return (React.createElement(Link, { to: path },
        React.createElement(Image, { src: cover }),
        emoji));
};
