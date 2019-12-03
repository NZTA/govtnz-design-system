!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.fakeFocus,n=e.radioId,r=e.hintId,l=e.name,i=e.disabled,o=e.readOnly,u=e.autoFocus,d=e.value,c=e.checked,s=e.onChange,f=e.label;return a.createElement("div",{className:"g-radios__item"},a.createElement("input",{"aria-describedby":r,className:"g-radios__input"+(t?" :focus":""),id:n,name:l,type:"radio",disabled:i,readOnly:o,autoFocus:u,value:d,checked:c,onChange:s}),a.createElement("label",{className:"g-radioBlock-label g-radios__label",htmlFor:n},void 0!==f?f:a.createElement(a.Fragment,null,"Label text")))}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.errorId,n=e.hintId,r=e.legend,l=e.hint,i=e.error,o=e.children;return a.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.createElement("fieldset",{"aria-describedby":void 0!==n||void 0!==t?(n||"")+(t?" "+t:""):void 0,className:"g-fieldset"},a.createElement("legend",{className:"g-fieldset__legend"},void 0!==r?r:a.createElement(a.Fragment,null,"Legend text")),void 0!==n?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-hint",id:n},void 0!==l?l:a.createElement(a.Fragment,null,"Hint text"))):"",void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==i?i:a.createElement(a.Fragment,null,"Error text"))):"",a.createElement("div",null,void 0!==o?o:a.createElement(a.Fragment,null,"Fieldset contents"))))}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,i=e.id,o=e.children;return a.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":""),id:i},void 0!==o?o:a.createElement(a.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.inline,n=e.children;return a.createElement("div",{className:"g-radios"+(t?" g-radios--inline":"")},void 0!==n?n:a.createElement(a.Fragment,null,"Radio components"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(2),i=n.n(l),o=n(3),u=n.n(o),d=n(4),c=n.n(d),s=n(5),f=n.n(s),m=n(1),v=n.n(m);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},b=function(e){return a.a.createElement(p,h({title:"Example: Radio buttons"},y({})),a.a.createElement(u.a,h({legend:a.a.createElement(c.a,{styleSize:"large",id:"nameChangeId1"},"Have you changed your name?"),hint:a.a.createElement("p",null,"This includes changing your last name or spelling your name differently."),hintId:"hintId1"},y({})),a.a.createElement(f.a,h({inline:!0},y({})),a.a.createElement(v.a,h({label:"Yes",radioId:"anyRadioId",value:"true",name:"nameChange1",labelId:"labelId1",hintId:"hintId1"},y({value:"true"}))),a.a.createElement(v.a,h({label:"No",radioId:"anyRadioId255",value:"false",name:"nameChange1",labelId:"labelId255",hintId:"hintId1"},y({value:"false"}))))))},y=function(e){var t=g(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=g(Object(r.useState)(e&&e.value2),2),i=l[0],o=l[1],u=g(Object(r.useState)(e&&e.value3),2),d=u[0],c=u[1];return{value:n,value2:i,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?i.a.hydrate(a.a.createElement(b,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);