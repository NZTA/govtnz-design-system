"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

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

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    dobWithAutocompleteAttributeHint: {
      type: String,
      required: false
    },
    dobWithAutocompleteAttribute: {
      type: String,
      required: false
    },
    dobWithAutocompleteAttributeDay: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      "default": false,
      required: false
    },
    readOnly: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoFocus: {
      type: Boolean,
      "default": false,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    type: {
      type: String,
      validator: function validator(value) {
        return ["Button", "Checkbox", "Color", "Date", "DateTime: Local", "Email", "File", "Hidden", "Image", "Month", "Number", "Password", "Radio", "Range", "Reset", "Search", "Submit", "Telephone", "Text", "Time", "URL", "Week"].indexOf(value) !== -1;
      },
      required: true
    },
    spellCheck: {
      type: Boolean,
      "default": false,
      required: false
    },
    maxLength: {
      type: String,
      required: false
    },
    autoComplete: {
      type: String,
      validator: function validator(value) {
        return ["Off", "On", "Name", "Honorific: Prefix", "Given Name", "Additional Name", "Family Name", "Honorific: Suffix", "Nickname", "Email", "Username", "New Password", "Current Password", "Organization Title", "Organization", "Street Address", "Address Line 1", "Address Line 2", "Address Line 3", "Address Level 4", "Address Level 3", "Address Level 2", "Address Level 1", "Country", "Country Name", "Postal Code", "Credit Card: Name", "Credit Card: Given Name", "Credit Card: Additional Name", "Credit Card: Family Name", "Credit Card: Number", "Credit Card: Expiry", "Credit Card: Expiry Month", "Credit Card: Expiry Year", "Credit Card: CSC", "Credit Card: Type", "Transaction: Currency", "Transaction: Amount", "Language", "Birthday", "Birthday: Day", "Birthday: Month", "Birthday: Year", "Sex", "Telephone", "Telephone: Country Code", "Telephone: National", "Telephone: Area Code", "Telephone: Local", "Telephone: Extension", "IMPP", "URL", "Photo"].indexOf(value) !== -1;
      },
      required: true
    },
    dobWithAutocompleteAttributeMonth: {
      type: String,
      required: false
    },
    name2: {
      type: String,
      required: true
    },
    disabled2: {
      type: Boolean,
      "default": false,
      required: false
    },
    readOnly2: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoFocus2: {
      type: Boolean,
      "default": false,
      required: false
    },
    value2: {
      type: String,
      required: false
    },
    type2: {
      type: String,
      validator: function validator(value) {
        return ["Button", "Checkbox", "Color", "Date", "DateTime: Local", "Email", "File", "Hidden", "Image", "Month", "Number", "Password", "Radio", "Range", "Reset", "Search", "Submit", "Telephone", "Text", "Time", "URL", "Week"].indexOf(value) !== -1;
      },
      required: true
    },
    spellCheck2: {
      type: Boolean,
      "default": false,
      required: false
    },
    maxLength2: {
      type: String,
      required: false
    },
    autoComplete2: {
      type: String,
      validator: function validator(value) {
        return ["Off", "On", "Name", "Honorific: Prefix", "Given Name", "Additional Name", "Family Name", "Honorific: Suffix", "Nickname", "Email", "Username", "New Password", "Current Password", "Organization Title", "Organization", "Street Address", "Address Line 1", "Address Line 2", "Address Line 3", "Address Level 4", "Address Level 3", "Address Level 2", "Address Level 1", "Country", "Country Name", "Postal Code", "Credit Card: Name", "Credit Card: Given Name", "Credit Card: Additional Name", "Credit Card: Family Name", "Credit Card: Number", "Credit Card: Expiry", "Credit Card: Expiry Month", "Credit Card: Expiry Year", "Credit Card: CSC", "Credit Card: Type", "Transaction: Currency", "Transaction: Amount", "Language", "Birthday", "Birthday: Day", "Birthday: Month", "Birthday: Year", "Sex", "Telephone", "Telephone: Country Code", "Telephone: National", "Telephone: Area Code", "Telephone: Local", "Telephone: Extension", "IMPP", "URL", "Photo"].indexOf(value) !== -1;
      },
      required: true
    },
    dobWithAutocompleteAttributeYear: {
      type: String,
      required: false
    },
    name3: {
      type: String,
      required: true
    },
    disabled3: {
      type: Boolean,
      "default": false,
      required: false
    },
    readOnly3: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoFocus3: {
      type: Boolean,
      "default": false,
      required: false
    },
    value3: {
      type: String,
      required: false
    },
    type3: {
      type: String,
      validator: function validator(value) {
        return ["Button", "Checkbox", "Color", "Date", "DateTime: Local", "Email", "File", "Hidden", "Image", "Month", "Number", "Password", "Radio", "Range", "Reset", "Search", "Submit", "Telephone", "Text", "Time", "URL", "Week"].indexOf(value) !== -1;
      },
      required: true
    },
    spellCheck3: {
      type: Boolean,
      "default": false,
      required: false
    },
    maxLength3: {
      type: String,
      required: false
    },
    autoComplete3: {
      type: String,
      validator: function validator(value) {
        return ["Off", "On", "Name", "Honorific: Prefix", "Given Name", "Additional Name", "Family Name", "Honorific: Suffix", "Nickname", "Email", "Username", "New Password", "Current Password", "Organization Title", "Organization", "Street Address", "Address Line 1", "Address Line 2", "Address Line 3", "Address Level 4", "Address Level 3", "Address Level 2", "Address Level 1", "Country", "Country Name", "Postal Code", "Credit Card: Name", "Credit Card: Given Name", "Credit Card: Additional Name", "Credit Card: Family Name", "Credit Card: Number", "Credit Card: Expiry", "Credit Card: Expiry Month", "Credit Card: Expiry Year", "Credit Card: CSC", "Credit Card: Type", "Transaction: Currency", "Transaction: Amount", "Language", "Birthday", "Birthday: Day", "Birthday: Month", "Birthday: Year", "Sex", "Telephone", "Telephone: Country Code", "Telephone: National", "Telephone: Area Code", "Telephone: Local", "Telephone: Extension", "IMPP", "URL", "Photo"].indexOf(value) !== -1;
      },
      required: true
    }
  },
  computed: {
    computed__autocomplete: function computed__autocomplete() {
      return constants[this.autoComplete] !== undefined ? constants[this.autoComplete] : "";
    },
    computed__type: function computed__type() {
      return constants[this.type] !== undefined ? constants[this.type] : "";
    },
    computed__autocomplete2: function computed__autocomplete2() {
      return constants[this.autoComplete2] !== undefined ? constants[this.autoComplete2] : "";
    },
    computed__type2: function computed__type2() {
      return constants[this.type2] !== undefined ? constants[this.type2] : "";
    },
    computed__autocomplete3: function computed__autocomplete3() {
      return constants[this.autoComplete3] !== undefined ? constants[this.autoComplete3] : "";
    },
    computed__type3: function computed__type3() {
      return constants[this.type3] !== undefined ? constants[this.type3] : "";
    }
  },
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-form-group"},[_c(\'fieldset\',{staticClass:"g-dateInputWithAutocompleteValues-fieldset",attrs:{"aria-describedby":dobWithAutocompleteAttributeHint,"role":"group"}},[_c(\'legend\',{staticClass:"g-dateInputWithAutocompleteValues-fieldset__legend"},[_v("\\nWhat is your date of birth?\\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-dateInputWithAutocompleteValues-hint",attrs:{"id":dobWithAutocompleteAttributeHint}},[_v("\\n\\n      For example, 31 3 1980\\n    \\n\\n")]),_v(" "),_c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-date-input",attrs:{"id":dobWithAutocompleteAttribute}},[_c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-date-input__item"},[_c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-form-group"},[_c(\'label\',{staticClass:"g-dateInputWithAutocompleteValues-label g-dateInputWithAutocompleteValues-date-input__label",attrs:{"for":dobWithAutocompleteAttributeDay}},[_v("\\n\\n            Day\\n          \\n\\n")]),_v(" "),_c(\'input\',{staticClass:"g-dateInputWithAutocompleteValues-input g-dateInputWithAutocompleteValues-date-input__input g-dateInputWithAutocompleteValues-input--width-2",attrs:{"autocomplete":computed__autocomplete,"id":dobWithAutocompleteAttributeDay,"name":name,"pattern":"[0-9]*","type":computed__type,"disabled":disabled,"readonly":readOnly,"autofocus":autoFocus,"spellcheck":spellCheck,"maxlength":maxLength},domProps:{"value":value}})])]),_v(" "),_c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-date-input__item"},[_c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-form-group"},[_c(\'label\',{staticClass:"g-dateInputWithAutocompleteValues-label g-dateInputWithAutocompleteValues-date-input__label",attrs:{"for":dobWithAutocompleteAttributeMonth}},[_v("\\n\\n            Month\\n          \\n\\n")]),_v(" "),_c(\'input\',{staticClass:"g-dateInputWithAutocompleteValues-input g-dateInputWithAutocompleteValues-date-input__input g-dateInputWithAutocompleteValues-input--width-2",attrs:{"autocomplete":computed__autocomplete2,"id":dobWithAutocompleteAttributeMonth,"name":name2,"pattern":"[0-9]*","type":computed__type2,"disabled":disabled2,"readonly":readOnly2,"autofocus":autoFocus2,"spellcheck":spellCheck2,"maxlength":maxLength2},domProps:{"value":value2}})])]),_v(" "),_c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-date-input__item"},[_c(\'div\',{staticClass:"g-dateInputWithAutocompleteValues-form-group"},[_c(\'label\',{staticClass:"g-dateInputWithAutocompleteValues-label g-dateInputWithAutocompleteValues-date-input__label",attrs:{"for":dobWithAutocompleteAttributeYear}},[_v("\\n\\n            Year\\n          \\n\\n")]),_v(" "),_c(\'input\',{staticClass:"g-dateInputWithAutocompleteValues-input g-dateInputWithAutocompleteValues-date-input__input g-dateInputWithAutocompleteValues-input--width-2",attrs:{"autocomplete":computed__autocomplete3,"id":dobWithAutocompleteAttributeYear,"name":name3,"pattern":"[0-9]*","type":computed__type3,"disabled":disabled3,"readonly":readOnly3,"autofocus":autoFocus3,"spellcheck":spellCheck3,"maxlength":maxLength3},domProps:{"value":value3}})])])])])])}')
});

exports["default"] = _default;