import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm/index";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";
export var NotRegisteredUser = function () {
    var activateAuth = useContext(Context).activateAuth;
    return (React.createElement(Fragment, null,
        React.createElement(RegisterMutation, null, function (register, _a) {
            var data = _a.data, loading = _a.loading, error = _a.error;
            var onSubmit = function (_a) {
                var email = _a.email, password = _a.password;
                var input = { email: email, password: password };
                var variables = { input: input };
                register({ variables: variables }).then(function (_a) {
                    var data = _a.data;
                    var signup = data.signup;
                    activateAuth(signup);
                });
            };
            var errorMsg = error && "El usuario ya existe o hay algun problema";
            return (React.createElement(UserForm, { disabled: loading, error: errorMsg, title: "Registrarse", onSubmit: onSubmit }));
        }),
        React.createElement(LoginMutation, null, function (login, _a) {
            var data = _a.data, loading = _a.loading, error = _a.error;
            var onSubmit = function (_a) {
                var email = _a.email, password = _a.password;
                var input = { email: email, password: password };
                var variables = { input: input };
                login({ variables: variables }).then(function (_a) {
                    var data = _a.data;
                    var login = data.login;
                    activateAuth(login);
                });
            };
            var errorMsg = error && "La contraseña o el usuario no son correctos";
            return (React.createElement(UserForm, { disabled: loading, error: errorMsg, title: "Iniciar sesion", onSubmit: onSubmit }));
        })));
};
