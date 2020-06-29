import React from "react";
import { Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";
export var FavButton = function (_a) {
    var liked = _a.liked, likes = _a.likes, onClick = _a.onClick;
    var Icon = liked ? MdFavorite : MdFavoriteBorder;
    return (React.createElement(Button, { onClick: onClick },
        React.createElement(Icon, { size: "32px" }),
        likes,
        " likes!"));
};
FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};
