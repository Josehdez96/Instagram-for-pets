import React from "react";
import { Link, Nav } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
var SIZE = "32px";
export var NavBar = function () {
    return (React.createElement(Nav, null,
        React.createElement(Link, { to: "/" },
            React.createElement(MdHome, { size: SIZE })),
        React.createElement(Link, { to: "/favs" },
            React.createElement(MdFavoriteBorder, { size: SIZE })),
        React.createElement(Link, { to: "/user" },
            React.createElement(MdPersonOutline, { size: SIZE }))));
};
