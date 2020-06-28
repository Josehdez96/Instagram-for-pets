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
var Detail = React.lazy(function () { return import("./pages/Detail"); });
var Favs = React.lazy(function () { return import("./pages/Favs"); });
var User = React.lazy(function () { return import("./pages/User"); });
export var App = function () {
    var isAuth = useContext(Context).isAuth;
    return (React.createElement(Suspense, { fallback: React.createElement("div", null) },
        React.createElement(GlobalStyle, null),
        React.createElement(Logo, null),
        React.createElement(Router, null,
            React.createElement(NotFound, { default: true }),
            React.createElement(Home, { path: "/" }),
            React.createElement(Home, { path: "/pet/:id" }),
            React.createElement(Detail, { path: "/detail/:detailId" }),
            !isAuth && React.createElement(NotRegisteredUser, { path: "/login" }),
            !isAuth && React.createElement(Redirect, { noThrow: true, from: "/favs", to: "/login" }),
            !isAuth && React.createElement(Redirect, { noThrow: true, from: "/user", to: "/login" }),
            isAuth && React.createElement(Redirect, { noThrow: true, from: "/login", to: "/" }),
            React.createElement(Favs, { path: "/favs" }),
            React.createElement(User, { path: "/user" })),
        React.createElement(NavBar, null)));
};
