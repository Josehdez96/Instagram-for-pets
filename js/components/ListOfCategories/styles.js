var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";
export var List = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  overflow: scroll;\n  width: 100%;\n  margin-top: 10px;\n  ", "\n"], ["\n  display: flex;\n  overflow: scroll;\n  width: 100%;\n  margin-top: 10px;\n  ",
    "\n"])), function (props) {
    return props.fixed && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", ";\n      background: #fff;\n      border-radius: 60px;\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n      left: 0;\n      margin: 0 auto;\n      max-width: 400px;\n      padding: 5px;\n      position: fixed;\n      right: 0;\n      top: -20px;\n      transform: scale(0.5);\n      z-index: 1;\n    "], ["\n      ", ";\n      background: #fff;\n      border-radius: 60px;\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n      left: 0;\n      margin: 0 auto;\n      max-width: 400px;\n      padding: 5px;\n      position: fixed;\n      right: 0;\n      top: -20px;\n      transform: scale(0.5);\n      z-index: 1;\n    "])), fadeIn());
});
export var Item = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0 8px;\n"], ["\n  padding: 0 8px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
