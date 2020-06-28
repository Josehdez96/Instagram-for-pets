import React, { useContext, Suspense } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Router, Redirect } from "@reach/router";

import { Home } from "./pages/Home";
//import { Detail } from "./pages/Detail";
//import { Favs } from "./pages/Favs"; Ya no lo usamos porque usamos React.lazy
//import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NotFound } from "./pages/NotFound"; //Con el componente + default: Si ninguna ruta matchea, va a esta pagina

import { Context } from "./Context";

const Detail = React.lazy(() => import("./pages/Detail"));
const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));

export const App = () => {
    const { isAuth } = useContext(Context);

    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path="/" />
                <Home path="/pet/:id" />
                <Detail path="/detail/:detailId" />
                {!isAuth && <NotRegisteredUser path="/login" />}
                {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
                {!isAuth && <Redirect noThrow from="/user" to="/login" />}
                {isAuth && <Redirect noThrow from="/login" to="/" />}

                <Favs path="/favs" />
                <User path="/user" />
            </Router>
            <NavBar />
        </Suspense>
    );
};
