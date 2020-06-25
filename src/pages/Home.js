import React from "react";

import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { Layout } from "../components/Layout";

const HomePage = ({ id }) => {
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
