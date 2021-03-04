"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid red;\n"], ["\n  border: 1px solid red;\n"])));
var Accordion = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledDiv, { role: "contentinfo" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example Accordion content "))));
};
exports.default = Accordion;
var templateObject_1;
//# sourceMappingURL=Accordion.js.map