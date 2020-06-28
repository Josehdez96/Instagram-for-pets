import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout";
export default (function () { return (React.createElement(Layout, { title: "Tus Petgram Favoritos", subtitle: "Aqu\u00ED estan tus favoritos" },
    React.createElement(FavsWithQuery, null))); });
