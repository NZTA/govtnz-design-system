"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  autoComplete: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete2: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type2: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete3: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type3: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  }
};

var DateInputWithAutocompleteValues = function DateInputWithAutocompleteValues(_ref) {
  var dobWithAutocompleteAttributeHint = _ref.dobWithAutocompleteAttributeHint,
      dobWithAutocompleteAttribute = _ref.dobWithAutocompleteAttribute,
      dobWithAutocompleteAttributeDay = _ref.dobWithAutocompleteAttributeDay,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      type = _ref.type,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange,
      dobWithAutocompleteAttributeMonth = _ref.dobWithAutocompleteAttributeMonth,
      name2 = _ref.name2,
      disabled2 = _ref.disabled2,
      readOnly2 = _ref.readOnly2,
      autoFocus2 = _ref.autoFocus2,
      value2 = _ref.value2,
      type2 = _ref.type2,
      spellCheck2 = _ref.spellCheck2,
      autoComplete2 = _ref.autoComplete2,
      onChange2 = _ref.onChange2,
      dobWithAutocompleteAttributeYear = _ref.dobWithAutocompleteAttributeYear,
      name3 = _ref.name3,
      disabled3 = _ref.disabled3,
      readOnly3 = _ref.readOnly3,
      autoFocus3 = _ref.autoFocus3,
      value3 = _ref.value3,
      type3 = _ref.type3,
      spellCheck3 = _ref.spellCheck3,
      autoComplete3 = _ref.autoComplete3,
      onChange3 = _ref.onChange3;
  return _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-form-group"
  }, _react["default"].createElement("fieldset", {
    "aria-describedby": dobWithAutocompleteAttributeHint,
    className: "g-dateInputWithAutocompleteValues-fieldset",
    role: "group"
  }, _react["default"].createElement("legend", {
    className: "g-dateInputWithAutocompleteValues-fieldset__legend"
  }, "What is your date of birth?"), _react["default"].createElement("span", {
    className: "g-dateInputWithAutocompleteValues-hint",
    id: dobWithAutocompleteAttributeHint
  }, "For example, 31 3 1980"), _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-date-input",
    id: dobWithAutocompleteAttribute
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInputWithAutocompleteValues-label g-dateInputWithAutocompleteValues-date-input__label",
    htmlFor: dobWithAutocompleteAttributeDay
  }, "Day"), _react["default"].createElement("input", {
    autoComplete: constants.autoComplete[autoComplete],
    className: "g-dateInputWithAutocompleteValues-input g-dateInputWithAutocompleteValues-date-input__input g-dateInputWithAutocompleteValues-input--width-2",
    id: dobWithAutocompleteAttributeDay,
    name: name,
    pattern: "[0-9]*",
    type: constants.type[type],
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    onChange: onChange
  }))), _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInputWithAutocompleteValues-label g-dateInputWithAutocompleteValues-date-input__label",
    htmlFor: dobWithAutocompleteAttributeMonth
  }, "Month"), _react["default"].createElement("input", {
    autoComplete: constants.autoComplete2[autoComplete2],
    className: "g-dateInputWithAutocompleteValues-input g-dateInputWithAutocompleteValues-date-input__input g-dateInputWithAutocompleteValues-input--width-2",
    id: dobWithAutocompleteAttributeMonth,
    name: name2,
    pattern: "[0-9]*",
    type: constants.type2[type2],
    disabled: disabled2,
    readOnly: readOnly2,
    autoFocus: autoFocus2,
    value: value2,
    spellCheck: spellCheck2,
    onChange: onChange2
  }))), _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithAutocompleteValues-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInputWithAutocompleteValues-label g-dateInputWithAutocompleteValues-date-input__label",
    htmlFor: dobWithAutocompleteAttributeYear
  }, "Year"), _react["default"].createElement("input", {
    autoComplete: constants.autoComplete3[autoComplete3],
    className: "g-dateInputWithAutocompleteValues-input g-dateInputWithAutocompleteValues-date-input__input g-dateInputWithAutocompleteValues-input--width-2",
    id: dobWithAutocompleteAttributeYear,
    name: name3,
    pattern: "[0-9]*",
    type: constants.type3[type3],
    disabled: disabled3,
    readOnly: readOnly3,
    autoFocus: autoFocus3,
    value: value3,
    spellCheck: spellCheck3,
    onChange: onChange3
  }))))));
};

DateInputWithAutocompleteValues.props = ["dobWithAutocompleteAttributeHint", "dobWithAutocompleteAttribute", "dobWithAutocompleteAttributeDay", "name", "disabled", "readOnly", "autoFocus", "value", "type", "spellCheck", "autoComplete", "onChange", "dobWithAutocompleteAttributeMonth", "name2", "disabled2", "readOnly2", "autoFocus2", "value2", "type2", "spellCheck2", "autoComplete2", "onChange2", "dobWithAutocompleteAttributeYear", "name3", "disabled3", "readOnly3", "autoFocus3", "value3", "type3", "spellCheck3", "autoComplete3", "onChange3"];
var _default = DateInputWithAutocompleteValues;
exports["default"] = _default;