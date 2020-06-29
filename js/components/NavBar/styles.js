var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";
export var Nav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background: #fcfcfc;\n  border-top: 1px solid #e0e0e0;\n  bottom: 0;\n  display: flex;\n  height: 50px;\n  justify-content: space-around;\n  left: 0;\n  margin: 0 auto;\n  max-width: 500px;\n  position: fixed;\n  right: 0;\n  width: 100%;\n  z-index: 1000;\n"], ["\n  align-items: center;\n  background: #fcfcfc;\n  border-top: 1px solid #e0e0e0;\n  bottom: 0;\n  display: flex;\n  height: 50px;\n  justify-content: space-around;\n  left: 0;\n  margin: 0 auto;\n  max-width: 500px;\n  position: fixed;\n  right: 0;\n  width: 100%;\n  z-index: 1000;\n"])));
export var Link = styled(LinkRouter)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  color: #888;\n  display: inline-flex;\n  height: 100%;\n  justify-content: center;\n  text-decoration: none;\n  width: 100%;\n\n  &[aria-current] {\n    color: #000;\n\n    &:after {\n      ", "\n      content: \"\u00B7\";\n      position: absolute;\n      bottom: 0;\n      font-size: 34px;\n      line-height: 20px;\n    }\n  }\n"], ["\n  align-items: center;\n  color: #888;\n  display: inline-flex;\n  height: 100%;\n  justify-content: center;\n  text-decoration: none;\n  width: 100%;\n\n  &[aria-current] {\n    color: #000;\n\n    &:after {\n      ", "\n      content: \"\u00B7\";\n      position: absolute;\n      bottom: 0;\n      font-size: 34px;\n      line-height: 20px;\n    }\n  }\n"])), fadeIn({ time: "0.5s" }));
var templateObject_1, templateObject_2;
