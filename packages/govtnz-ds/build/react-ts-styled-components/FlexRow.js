"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n"])));
var FlexRow = function (_a) {
    var alignXs = _a.alignXs, alignSm = _a.alignSm, alignMd = _a.alignMd, alignLg = _a.alignLg, isReversed = _a.isReversed, children = _a.children;
    return (React.createElement(StyledDiv, { alignXs: alignXs, alignSm: alignSm, alignMd: alignMd, alignLg: alignLg, isReversed: isReversed }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Columns..."))));
};
exports.default = FlexRow;
var templateObject_1;
//# sourceMappingURL=FlexRow.js.map