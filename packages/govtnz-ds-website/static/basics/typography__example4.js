!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),u=r.n(o),l={styleSize:{large:"g-p-body-l",medium:"g-p-body-m",small:"g-p-body-s","x-small":"g-p-body-xs"}},i=function(e){var t=e.styleSize,r=e.children;return n.createElement("p",{className:void 0!==l.styleSize[t]?l.styleSize[t]:""},void 0!==r?r:n.createElement(n.Fragment,null,"Example text"))};function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=function(e){var t=e.children;return a.a.createElement("div",{className:"example__section"},t)},d=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},p=function(e){return a.a.createElement(d,s({title:"Example: Large size for lead paragraph (Typography)"},y({})),a.a.createElement(f,y({}),a.a.createElement(i,s({styleSize:"large"},y({})),"Design and build fast, accessible websites backed by user research, so New Zealanders can easily use government services online.")))},y=function(e){var t=c(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=c(Object(n.useState)(e&&e.value2),2),u=o[0],l=o[1],i=c(Object(n.useState)(e&&e.value3),2),s=i[0],f=i[1];return{value:r,value2:u,value3:s,onChange:function(e){return a(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return f(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(a.a.createElement(p,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);