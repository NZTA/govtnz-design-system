!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),l=r.n(o),u={styleSize:{large:"g-p-body-l",medium:"g-p-body-m",small:"g-p-body-s","x-small":"g-p-body-xs"}},i=function(e){var t=e.styleSize,r=e.children;return n.createElement("p",{className:void 0!==u.styleSize[t]?u.styleSize[t]:""},void 0!==r?r:n.createElement(n.Fragment,null,"Example text"))},c=function(e){var t=e.numbered,r=e.children;return n.createElement("ol",{className:"g-ol-list".concat(t?" g-ol-list--number":"")},void 0!==r?r:n.createElement(n.Fragment,null,"Example text"))},s=function(e){var t=e.children;return n.createElement("li",null,void 0!==t?t:n.createElement(n.Fragment,null,"Example text"))};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},p=function(e){return a.a.createElement(f,m({title:"Example: Numbered lists (Typography)"},y({})),a.a.createElement(i,m({styleSize:"medium"},y({})),"To sign up, you need to complete four steps."),a.a.createElement(c,m({numbered:!0},y({})),a.a.createElement(s,y({}),"Prove your identity, such as with RealMe"),a.a.createElement(s,y({}),"Provide a passport-sized photo"),a.a.createElement(s,y({}),"Enter your address details:",a.a.createElement(c,m({numbered:!0},y({})),a.a.createElement(s,y({}),"Postal address"),a.a.createElement(s,y({}),"Delivery address"))),a.a.createElement(s,y({}),"Confirm payment methods")))},y=function(e){var t=d(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=d(Object(n.useState)(e&&e.value2),2),l=o[0],u=o[1],i=d(Object(n.useState)(e&&e.value3),2),c=i[0],s=i[1];return{value:r,value2:l,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return s(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(p,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);