!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),u={2:"g-inputBlock-input--width-2",3:"g-inputBlock-input--width-3",4:"g-inputBlock-input--width-4",5:"g-inputBlock-input--width-5",10:"g-inputBlock-input--width-10",20:"g-inputBlock-input--width-20",30:"g-inputBlock-input--width-30"};t.default=function(e){var t=e.errorId,n=e.id,r=e.label,a=e.hint,i=e.hintId,l=e.error,c=e.width,f=e.disabled,p=e.readOnly,d=e.autoFocus,s=e.name,y=e.value,m=e.min,b=e.max,v=e.type,g=e.spellCheck,h=e.maxLength,O=e.autoComplete,j=e.onChange,w=e.ref;return o.default.createElement("div",{className:"g-inputBlock-form-group"+(t?" g-inputBlock-form-group--error":"")},o.default.createElement("label",{className:"g-inputBlock-label",htmlFor:n},void 0!==r?r:o.default.createElement(o.default.Fragment,null,"Example text")),void 0!==a?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"g-inputBlock-hint",id:i},void 0!==a?a:o.default.createElement(o.default.Fragment,null,"Example text"))):"",void 0!==t?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"g-inputBlock-error-message",id:t},o.default.createElement("span",{className:"g-inputBlock-visually-hidden"},"Error: "),void 0!==l?l:o.default.createElement(o.default.Fragment,null,"Example text"))):"",o.default.createElement("input",{"aria-describedby":void 0!==i||void 0!==t?(i||"")+(t?" "+t:""):void 0,className:"g-inputBlock-input"+(void 0!==u[c]?" "+u[c]:"")+(l?" g-inputBlock-input--error":""),id:n,name:s,disabled:void 0!==f?"true"===f.toString():void 0,readOnly:p,autoFocus:d,value:y,min:m,max:b,type:v,spellCheck:g,maxLength:h,autoComplete:O,onChange:j,ref:w}))}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1),a=n.n(u),i=n(2),l=n.n(i);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x=function(e){var t=e.children;return o.a.createElement(r.Fragment,null,t)},P=function(e){return o.a.createElement(x,S({title:"Example: Error state #1 (Text input)"},_({})),o.a.createElement(l.a,S({type:"text",label:"Event name",name:"anyName",id:"anyId2f",errorId:"anyErrorId2Error",error:"Enter a known event name"},_({}))))},k=o.a.createContext(void 0),_=(r.Component,o.a.Component,function(e){var t=c(Object(r.useState)(e&&e.value),2),n=t[0],o=t[1],u=c(Object(r.useState)(e&&e.value2),2),a=u[0],i=u[1],l=c(Object(r.useState)(e&&e.value3),2),f=l[0],p=l[1];return{value:n,value2:a,value3:f,onChange:function(e){return o(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return p(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?a.a.hydrate(o.a.createElement(P,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);