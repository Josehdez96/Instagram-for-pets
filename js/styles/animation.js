var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css, keyframes } from "styled-components";
var fadeInKeyframes = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    filter: blur(5px);\n    opacity: 0;\n  }\n\n  to {\n    filter: bluer(0);\n    opacity: 1;\n  }\n"], ["\n  from {\n    filter: blur(5px);\n    opacity: 0;\n  }\n\n  to {\n    filter: bluer(0);\n    opacity: 1;\n  }\n"])));
export var fadeIn = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.time, time = _c === void 0 ? "1s" : _c, _d = _b.type, type = _d === void 0 ? "ease" : _d;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    animation: ", " ", " ", ";\n  "], ["\n    animation: ", " ", " ", ";\n  "])), time, fadeInKeyframes, type);
};
var templateObject_1, templateObject_2;
