import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout";

export default () => (
  <Layout title="Tus Petgram Favoritos" subtitle="Aquí estan tus favoritos">
    <FavsWithQuery />
  </Layout>
);
