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
import React from "react";
import { PhotoCard } from "../PhotoCard";
export var ListOfPhotoCardsComponent = function (_a) {
    var _b = _a.data, _c = (_b === void 0 ? {} : _b).photos, photos = _c === void 0 ? [] : _c;
    return (React.createElement("ul", null, photos.map(function (photo) { return (React.createElement(PhotoCard, __assign({ key: photo.id }, photo))); })));
};
