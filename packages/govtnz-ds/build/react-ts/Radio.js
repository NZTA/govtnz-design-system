"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Radio = function (_a) {
    var fakeFocus = _a.fakeFocus, gov1 = _a.gov1, hintId = _a.hintId, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, checked = _a.checked, onChange = _a.onChange;
    return (React.createElement("input", { "aria-describedby": hintId, className: "g-radios__input" + (fakeFocus ? " :focus" : ""), id: gov1, name: name, type: "radio", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }));
};
exports.default = Radio;
//# sourceMappingURL=Radio.js.map