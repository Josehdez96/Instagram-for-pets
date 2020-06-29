import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Context } from "./Context";
import { App } from "./App";
var client = new ApolloClient({
    uri: "https://petgram-server-jose-daniel-25ci2soii.vercel.app/graphql",
    request: function (operation) {
        var token = window.sessionStorage.getItem("token");
        var authorization = token ? "Bearer " + token : "";
        operation.setContext({
            headers: {
                authorization: authorization,
            },
        });
    },
    onError: function (error) {
        var networkError = error.networkError;
        if (networkError && networkError.result.code == "invalid_token") {
            window.sessionStorage.removeItem("token");
            window.location.href = "/";
        }
    },
});
ReactDOM.render(React.createElement(Context.Provider, null,
    React.createElement(ApolloProvider, { client: client },
        React.createElement(App, null))), document.getElementById("app"));
