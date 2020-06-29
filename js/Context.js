import React, { createContext, useState } from "react";
export var Context = createContext();
var Provider = function (_a) {
    var children = _a.children;
    var _b = useState(function () {
        return window.sessionStorage.getItem("token");
    }), isAuth = _b[0], setIsAuth = _b[1];
    var value = {
        isAuth: isAuth,
        activateAuth: function (token) {
            setIsAuth(true);
            window.sessionStorage.setItem("token", token);
        },
        removeAuth: function () {
            setIsAuth(false);
            window.sessionStorage.removeItem("token");
        },
    };
    return React.createElement(Context.Provider, { value: value }, children);
};
export default {
    Provider: Provider,
    Consumer: Context.Consumer,
};
