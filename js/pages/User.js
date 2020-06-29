import React, { useContext, Fragment } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../components/SubmitButton";
export default (function () {
    var removeAuth = useContext(Context).removeAuth;
    return (React.createElement(Fragment, null,
        React.createElement("h1", null, "User"),
        React.createElement(SubmitButton, { onClick: removeAuth }, "Cerrar sesi\u00F3n")));
});
