import React, { Fragment } from "react";

import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";

export const Home = () => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2} />
    </Fragment>
  );
};
