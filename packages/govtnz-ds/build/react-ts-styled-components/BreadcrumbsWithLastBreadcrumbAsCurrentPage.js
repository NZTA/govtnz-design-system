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
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  color: #0b0c0c;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  @media print {\n    color: #000000;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  color: #0b0c0c;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  @media print {\n    color: #000000;\n  }\n  margin-top: 0px;\n"])));
var StyledOl = styled.ol(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  margin-top: 0px;\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  margin-top: 0px;\n"])));
var StyledLi = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  padding-left: 15.655px;\n  float: left;\n  :before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    bottom: 1px;\n    left: -3.31px;\n    width: 7px;\n    height: 7px;\n    margin: auto 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    border: solid;\n    border-width: 1px 1px 0 0;\n    border-color: #6f777b;\n  }\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n  :first-child:before {\n    content: none;\n    display: none;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  padding-left: 15.655px;\n  float: left;\n  :before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    bottom: 1px;\n    left: -3.31px;\n    width: 7px;\n    height: 7px;\n    margin: auto 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    border: solid;\n    border-width: 1px 1px 0 0;\n    border-color: #6f777b;\n  }\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n  :first-child:before {\n    content: none;\n    display: none;\n  }\n  margin-top: 0px;\n"])));
var StyledA = styled.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active,\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    :link,\n    :visited,\n    :hover,\n    :active,\n    :focus {\n      color: #000000;\n    }\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active,\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    :link,\n    :visited,\n    :hover,\n    :active,\n    :focus {\n      color: #000000;\n    }\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"])));
var StyledLi2 = styled.li(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  padding-left: 15.655px;\n  float: left;\n  :before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    bottom: 1px;\n    left: -3.31px;\n    width: 7px;\n    height: 7px;\n    margin: auto 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    border: solid;\n    border-width: 1px 1px 0 0;\n    border-color: #6f777b;\n  }\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n  :first-child:before {\n    content: none;\n    display: none;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  padding-left: 15.655px;\n  float: left;\n  :before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    bottom: 1px;\n    left: -3.31px;\n    width: 7px;\n    height: 7px;\n    margin: auto 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    border: solid;\n    border-width: 1px 1px 0 0;\n    border-color: #6f777b;\n  }\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n  :first-child:before {\n    content: none;\n    display: none;\n  }\n  margin-top: 0px;\n"])));
var StyledA2 = styled.a(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active,\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    :link,\n    :visited,\n    :hover,\n    :active,\n    :focus {\n      color: #000000;\n    }\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active,\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    :link,\n    :visited,\n    :hover,\n    :active,\n    :focus {\n      color: #000000;\n    }\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"])));
var StyledLi3 = styled.li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  padding-left: 15.655px;\n  float: left;\n  :before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    bottom: 1px;\n    left: -3.31px;\n    width: 7px;\n    height: 7px;\n    margin: auto 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    border: solid;\n    border-width: 1px 1px 0 0;\n    border-color: #6f777b;\n  }\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n  :first-child:before {\n    content: none;\n    display: none;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  padding-left: 15.655px;\n  float: left;\n  :before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    bottom: 1px;\n    left: -3.31px;\n    width: 7px;\n    height: 7px;\n    margin: auto 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    border: solid;\n    border-width: 1px 1px 0 0;\n    border-color: #6f777b;\n  }\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n  :first-child:before {\n    content: none;\n    display: none;\n  }\n  margin-top: 0px;\n"])));
var constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var BreadcrumbsWithLastBreadcrumbAsCurrentPage = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target, href2 = _a.href2, rel2 = _a.rel2, target2 = _a.target2;
    return (React.createElement(StyledDiv, null,
        React.createElement(StyledOl, null,
            React.createElement(StyledLi, null,
                React.createElement(StyledA, { href: href, rel: rel, target: constants.target[target] }, "Home")),
            React.createElement(StyledLi2, null,
                React.createElement(StyledA2, { href: href2, rel: rel2, target: constants.target2[target2] }, "Passports, travel and living abroad")),
            React.createElement(StyledLi3, { "aria-current": "page" }, "Travel abroad"))));
};
exports.default = BreadcrumbsWithLastBreadcrumbAsCurrentPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=BreadcrumbsWithLastBreadcrumbAsCurrentPage.js.map