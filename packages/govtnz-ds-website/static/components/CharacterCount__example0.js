!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),i=r.n(o);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={autoComplete:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"}},s=function(e){var t=e.id,r=e.name,a=e.disabled,o=e.readOnly,i=e.rows,c=e.cols,l=e.autoFocus,s=e.spellCheck,d=e.autoComplete,m=e.maxLength,f=e.value,p=e.onChange,y=e.remainingCharacters;return n.createElement("div",{className:"g-characterCountWithCustomRows-character-count"},n.createElement("div",{className:"g-characterCountWithCustomRows-form-group"},n.createElement("label",{className:"g-characterCountWithCustomRows-label",htmlFor:t},"Full address"),n.createElement("textarea",{className:"g-characterCountWithCustomRows-textarea",id:t,name:r,rows:i,disabled:a,readOnly:o,cols:c,autoFocus:l,spellCheck:s,autoComplete:u.autoComplete[d],maxLength:m,value:f,onChange:p}),n.createElement("span",{"aria-atomic":"true","aria-live":"polite",className:"g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message"},"You have"," ",void 0!==y?y:n.createElement(n.Fragment,null)," ","characters remaining")))},d=function(e){return n.createElement(s,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{remainingCharacters:function(e){return void 0!==e.value&&void 0!==e.maxLength?parseInt(e.maxLength.toString(),10)-e.value.length:e.maxLength}(e)}))};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},y=function(e){return a.a.createElement(p,f({title:"Example: Character count"},h({})),a.a.createElement(d,f({maxLength:"200"},h({}))))},h=function(e){var t=m(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=m(Object(n.useState)(e&&e.value2),2),i=o[0],c=o[1],l=m(Object(n.useState)(e&&e.value3),2),u=l[0],s=l[1];return{value:r,value2:i,value3:u,onChange:function(e){return a(e.target.value)},onChange2:function(e){return c(e.target.value)},onChange3:function(e){return s(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?i.a.hydrate(a.a.createElement(y,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);