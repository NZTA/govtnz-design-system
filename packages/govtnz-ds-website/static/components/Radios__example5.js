!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.id,n=e.hintId,l=e.disabled,o=e.readOnly,i=e.autoFocus,u=e.name,d=e.value,c=e.checked,f=e.onChange,s=e.ref,m=e.label,v=e.hint;return a.default.createElement("div",{className:"g-radios__item"+(t?" g-radioBlock-form-group--error":"")},a.default.createElement("input",{"aria-describedby":n,className:"g-radios__input",id:r,name:u,type:"radio",disabled:void 0!==l?"true"===l.toString():void 0,readOnly:o,autoFocus:i,value:d,checked:c,onChange:f,ref:s}),a.default.createElement("label",{className:"g-radioBlock-label g-radios__label",htmlFor:r},void 0!==m?m:a.default.createElement(a.default.Fragment,null,"Label text")),void 0!==n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-radioBlock-hint g-checkboxes__hint",id:n},void 0!==v?v:a.default.createElement(a.default.Fragment,null,"Hint text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.legend,l=e.hint,o=e.error,i=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-fieldset"},a.default.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Legend text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:r},void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,o=e.id,i=e.children;return a.default.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:o},void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.children;return a.default.createElement("div",{className:"g-form-divider"},void 0!==t?t:a.default.createElement(a.default.Fragment,null,"Contents..."))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(2),o=r.n(l),i=r(3),u=r.n(i),d=r(4),c=r.n(d),f=r(1),s=r.n(f),m=r(5),v=r.n(m);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var a=S(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var j=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},I=function(e){return a.a.createElement(j,x({title:"Example: Radio button items with a text divider"},C({})),a.a.createElement(u.a,x({legend:a.a.createElement(c.a,{styleSize:"large",id:"providerChoiceTitle2"},"Choose one provider"),hint:a.a.createElement("p",null,"Select one provider."),hintId:"hintId234"},C({})),a.a.createElement(s.a,x({label:"Sign in with Aardvark Services",hint:"North Island only",hintId:"someHintId72344",id:"anyRadioId7345",name:"providerChoice3",value:"provider1",labelId:"labelId5"},C({value:"provider1"}))),a.a.createElement(s.a,x({label:"Sign in with Dandelion Services",hint:"South and Stewart Islands only",hintId:"someHintId8533",id:"anyRadioId8345",name:"providerChoice3",value:"provider2",labelId:"labelId8"},C({value:"provider2"}))),a.a.createElement(v.a,C({}),a.a.createElement("p",null,"-or-")),a.a.createElement(s.a,x({label:"Sign in with Eel Services",hint:"Non-New Zealand residents only",hintId:"someHintId7234444",id:"anyRadioId3459",name:"providerChoice3",value:"provider3",labelId:"labelId9"},C({value:"provider3"})))))},w=a.a.createContext(void 0);n.Component;var C=function(e){var t=p(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],l=p(Object(n.useState)(e&&e.value2),2),o=l[0],i=l[1],u=p(Object(n.useState)(e&&e.value3),2),d=u[0],c=u[1];return{value:r,value2:o,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(I,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);