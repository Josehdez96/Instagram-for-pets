import React, { Fragment } from "react";
import { Link } from "@reach/router";
import { Img, ImgWrapper, Article } from "./styles";
import PropTypes from "prop-types";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton/index";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
var DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
export var PhotoCard = function (_a) {
    var id = _a.id, liked = _a.liked, _b = _a.likes, likes = _b === void 0 ? 0 : _b, _c = _a.src, src = _c === void 0 ? DEFAULT_IMAGE : _c;
    var _d = useNearScreen(), show = _d[0], element = _d[1];
    return (React.createElement(Article, { ref: element }, show && (React.createElement(Fragment, null,
        React.createElement(Link, { to: "/detail/" + id },
            React.createElement(ImgWrapper, null,
                React.createElement(Img, { src: src }))),
        React.createElement(ToggleLikeMutation, null, function (toggleLike) {
            var handleFavClick = function () {
                toggleLike({
                    variables: {
                        input: { id: id },
                    },
                });
            };
            return (React.createElement(FavButton, { liked: liked, likes: likes, onClick: handleFavClick }));
        })))));
};
PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (props, propName, componentName) {
        var propValue = props[propName];
        if (propValue === undefined) {
            return new Error(propName + " Value must be defined");
        }
        if (propValue < 0) {
            return new Error(propName + " Value must be greater than 0");
        }
    },
};
