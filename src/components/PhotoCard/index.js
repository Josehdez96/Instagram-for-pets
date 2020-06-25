import React, { Fragment } from "react";
import { Link } from "@reach/router";
import { Img, ImgWrapper, Article } from "./styles";
import PropTypes from "prop-types";

import { useNearScreen } from "../../hooks/useNearScreen";

import { FavButton } from "../FavButton/index";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({
                  variables: {
                    input: { id },
                  },
                });
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`);
    }
  },
};
