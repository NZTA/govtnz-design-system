!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.fakeFocus,r=e.radioId,n=e.hintId,l=e.name,i=e.disabled,o=e.readOnly,d=e.autoFocus,u=e.value,c=e.checked,s=e.onChange,v=e.label;return a.createElement("div",{className:"g-radios__item"},a.createElement("input",{"aria-describedby":n,className:"g-radios__input"+(t?" :focus":""),id:r,name:l,type:"radio",disabled:i,readOnly:o,autoFocus:d,value:u,checked:c,onChange:s}),a.createElement("label",{className:"g-radioBlock-label g-radios__label",htmlFor:r},void 0!==v?v:a.createElement(a.Fragment,null,"Label text")))}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.legend,l=e.hint,i=e.error,o=e.children;return a.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-fieldset"},a.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:a.createElement(a.Fragment,null,"Legend text")),void 0!==r?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-hint",id:r},void 0!==l?l:a.createElement(a.Fragment,null,"Hint text"))):"",void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==i?i:a.createElement(a.Fragment,null,"Error text"))):"",a.createElement("div",null,void 0!==o?o:a.createElement(a.Fragment,null,"Fieldset contents"))))}},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,i=e.id,o=e.children;return a.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:i},void 0!==o?o:a.createElement(a.Fragment,null,"Example text"))}},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.children;return a.createElement("div",{className:"g-form-divider"},void 0!==t?t:a.createElement(a.Fragment,null,"Contents..."))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(2),i=r.n(l),o=r(3),d=r.n(o),u=r(4),c=r.n(u),s=r(1),v=r.n(s),f=r(5),m=r.n(f);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw l}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},b=function(e){return a.a.createElement(p,h({title:"Example: Radio button items with a text divider"},y({})),a.a.createElement(d.a,h({legend:a.a.createElement(c.a,{styleSize:"large",id:"providerChoiceTitle2"},"Choose one provider"),hint:a.a.createElement("p",null,"Select one provider."),hintId:"hintId234"},y({})),a.a.createElement(v.a,h({label:"Sign in with Aardvark Services",hint:"North Island only",hintId:"someHintId72344",radioId:"anyRadioId7345",name:"providerChoice3",value:"provider1",labelId:"labelId5"},y({value:"provider1"}))),a.a.createElement(v.a,h({label:"Sign in with Dandelion Services",hint:"South and Stewart Islands only",hintId:"someHintId8533",radioId:"anyRadioId8345",name:"providerChoice3",value:"provider2",labelId:"labelId8"},y({value:"provider2"}))),a.a.createElement(m.a,y({}),a.a.createElement("p",null,"-or-")),a.a.createElement(v.a,h({label:"Sign in with Eel Services",hint:"Non-New Zealand residents only",hintId:"someHintId7234444",radioId:"anyRadioId3459",name:"providerChoice3",value:"provider3",labelId:"labelId9"},y({value:"provider3"})))))},y=function(e){var t=g(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],l=g(Object(n.useState)(e&&e.value2),2),i=l[0],o=l[1],d=g(Object(n.useState)(e&&e.value3),2),u=d[0],c=d[1];return{value:r,value2:i,value3:u,onChange:function(e){return a(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?i.a.hydrate(a.a.createElement(b,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);