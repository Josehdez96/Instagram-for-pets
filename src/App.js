import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search); //con location.search accedemos a la url actual
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? <PhotoCardWithQuery id={detailId} /> : <Home />}
    </div>
  );
};
