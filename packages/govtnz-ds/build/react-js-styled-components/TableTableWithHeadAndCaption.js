"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: #0b0c0c;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1.25;\n  display: block;\n  margin-top: 2.5rem;\n  margin-bottom: 0.5rem;\n  @media print {\n    color: #000000;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0.5rem;\n  }\n  padding-top: 5px;\n  @media (min-width: 40.0625em) {\n    padding-top: 10px;\n  }\n  font-weight: 700;\n  display: table-caption;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  width: 100%;\n  margin-bottom: 20px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTable = _styledComponents["default"].table(_templateObject());

var StyledCaption = _styledComponents["default"].caption(_templateObject2());

var TableTableWithHeadAndCaption = function TableTableWithHeadAndCaption(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement(StyledTable, null, _react["default"].createElement(StyledCaption, null, "Caption 1: Months and rates"), _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, "Month you apply Rate for bicycles Rate for vehicles")), _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, "January $85 $95"), _react["default"].createElement("tr", null, "February $75 $55"), _react["default"].createElement("tr", null, "March $165 $125")));
};

TableTableWithHeadAndCaption.props = [];
var _default = TableTableWithHeadAndCaption;
exports["default"] = _default;