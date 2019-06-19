/// <reference types="react" />
declare type Props = {
    width?: "30" | "20" | "10" | "5" | "4" | "3" | "2" | undefined;
    hasError?: boolean | undefined;
    fakeFocus?: boolean | undefined;
    inputId?: string | undefined;
    describedBy?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    value?: string | undefined;
    type: "Button" | "Checkbox" | "Color" | "Date" | "DateTime: Local" | "Email" | "File" | "Hidden" | "Image" | "Month" | "Number" | "Password" | "Radio" | "Range" | "Reset" | "Search" | "Submit" | "Telephone" | "Text" | "Time" | "URL" | "Week";
    spellCheck?: boolean | undefined;
    maxLength?: number | undefined;
    autoComplete: "Off" | "On" | "Name" | "Honorific: Prefix" | "Given Name" | "Additional Name" | "Family Name" | "Honorific: Suffix" | "Nickname" | "Email" | "Username" | "New Password" | "Current Password" | "Organization Title" | "Organization" | "Street Address" | "Address Line 1" | "Address Line 2" | "Address Line 3" | "Address Level 4" | "Address Level 3" | "Address Level 2" | "Address Level 1" | "Country" | "Country Name" | "Postal Code" | "Credit Card: Name" | "Credit Card: Given Name" | "Credit Card: Additional Name" | "Credit Card: Family Name" | "Credit Card: Number" | "Credit Card: Expiry" | "Credit Card: Expiry Month" | "Credit Card: Expiry Year" | "Credit Card: CSC" | "Credit Card: Type" | "Transaction: Currency" | "Transaction: Amount" | "Language" | "Birthday" | "Birthday: Day" | "Birthday: Month" | "Birthday: Year" | "Sex" | "Telephone" | "Telephone: Country Code" | "Telephone: National" | "Telephone: Area Code" | "Telephone: Local" | "Telephone: Extension" | "IMPP" | "URL" | "Photo";
    onChange: any;
};
declare const Input: ({ width, hasError, fakeFocus, inputId, describedBy, name, disabled, readOnly, autoFocus, value, type, spellCheck, maxLength, autoComplete, onChange }: Props) => JSX.Element;
export default Input;
