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
import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
//Encargado del Fetch
function useCategoriesData() {
    var _a = useState([]), categories = _a[0], setCategories = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    useEffect(function () {
        setLoading(true);
        //Reemplaza el componentDidMount y componentWillUnmount
        fetch("https://petgram-server-jose-daniel-25ci2soii.vercel.app/categories")
            .then(function (res) { return res.json(); })
            .then(function (res) {
            setCategories(res);
            setLoading(false);
        })
            .catch(function (err) {
            setLoading(false);
            console.error(err);
        });
    }, []);
    return { categories: categories, loading: loading };
}
var ListOfCategoriesComponent = function () {
    var _a = useCategoriesData(), categories = _a.categories, loading = _a.loading;
    var _b = useState(false), showFixed = _b[0], setShowFixed = _b[1];
    useEffect(function () {
        var onScroll = function (e) {
            var newShowFixed = window.scrollY > 200;
            showFixed != newShowFixed && setShowFixed(newShowFixed);
        };
        document.addEventListener("scroll", onScroll);
        return function () { return document.removeEventListener("scroll", onScroll); };
    }, [showFixed]);
    var renderList = function (fixed) { return (React.createElement(List, { fixed: fixed }, loading ? (React.createElement(Item, { key: "loading" },
        React.createElement(Category, null))) : (categories.map(function (category) { return (React.createElement(Item, { key: category.id },
        React.createElement(Category, __assign({}, category, { path: "/pet/" + category.id })))); })))); };
    return (React.createElement(Fragment, null,
        renderList(),
        showFixed && renderList(true)));
};
export var ListOfCategories = React.memo(ListOfCategoriesComponent);
