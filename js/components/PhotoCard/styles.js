var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { fadeIn } from "../../styles/animation";
export var Article = styled.article(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 200px;\n"], ["\n  min-height: 200px;\n"])));
export var ImgWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 10px;\n  display: block;\n  height: 0;\n  overflow: hidden;\n  padding: 56.25% 0 0 0;\n  position: relative;\n  width: 100%;\n"], ["\n  border-radius: 10px;\n  display: block;\n  height: 0;\n  overflow: hidden;\n  padding: 56.25% 0 0 0;\n  position: relative;\n  width: 100%;\n"])));
export var Img = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin-top: 20px;\n"], ["\n  ", ";\n  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  margin-top: 20px;\n"])), fadeIn());
var templateObject_1, templateObject_2, templateObject_3;
