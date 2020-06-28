var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Title } from "./styles";
import { SubmitButton } from "../SubmitButton";
export var UserForm = function (_a) {
    var onSubmit = _a.onSubmit, title = _a.title, error = _a.error, disabled = _a.disabled;
    var email = useInputValue("");
    var password = useInputValue("");
    var handleSubmit = function (e) {
        e.preventDefault();
        onSubmit({
            email: email.value,
            password: password.value,
        });
    };
    return (React.createElement(Fragment, null,
        React.createElement(Form, { disabled: disabled, onSubmit: handleSubmit },
            React.createElement(Title, null, title),
            React.createElement(Input, __assign({ disabled: disabled, placeholder: "Email" }, email)),
            React.createElement(Input, __assign({ disabled: disabled, placeholder: "Password", type: "password" }, password)),
            React.createElement(SubmitButton, { disabled: disabled }, title)),
        error && React.createElement(Error, null, error)));
};
