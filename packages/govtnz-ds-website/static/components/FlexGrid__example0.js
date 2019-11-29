!function(e){var l={};function o(t){if(l[t])return l[t].exports;var f=l[t]={i:t,l:!1,exports:{}};return e[t].call(f.exports,f,f.exports,o),f.l=!0,f.exports}o.m=e,o.c=l,o.d=function(e,l,t){o.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,l){if(1&l&&(e=o(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var f in e)o.d(t,f,function(l){return e[l]}.bind(null,f));return t},o.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(l,"a",l),l},o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},o.p="",o(o.s=2)}([function(e,l){e.exports=React},function(e,l){e.exports=ReactDOM},function(e,l,o){"use strict";o.r(l);var t=o(0),f=o.n(t),c=o(1),n=o.n(c),r={width:{fixed:"g-flex-container",fluid:"g-flex-container-fluid"}},g=function(e){var l=e.width,o=e.children;return t.createElement("div",{className:void 0!==r.width[l]?r.width[l]:""},void 0!==o?o:t.createElement(t.Fragment,null,"Rows..."))},s={start:"start-xs",center:"center-xs",end:"end-xs"},x={start:"start-sm",center:"center-sm",end:"end-sm"},a={start:"start-md",center:"center-md",end:"end-md"},d={start:"start-lg",center:"center-lg",end:"end-lg"},m=function(e){var l=e.alignXs,o=e.alignSm,f=e.alignMd,c=e.alignLg,n=e.isReversed,r=e.children;return t.createElement("div",{className:"g-flex-row".concat(void 0!==s[l]?" "+s[l]:"").concat(void 0!==x[o]?" "+x[o]:"").concat(void 0!==a[f]?" "+a[f]:"").concat(void 0!==d[c]?" "+d[c]:"").concat(n?" g-flex-reverse":"")},void 0!==r?r:t.createElement(t.Fragment,null,"Columns..."))},i={1:"g-flex-col-xs-1",2:"g-flex-col-xs-2",3:"g-flex-col-xs-3",4:"g-flex-col-xs-4",5:"g-flex-col-xs-5",6:"g-flex-col-xs-6",7:"g-flex-col-xs-7",8:"g-flex-col-xs-8",9:"g-flex-col-xs-9",10:"g-flex-col-xs-10",11:"g-flex-col-xs-11",12:"g-flex-col-xs-12",auto:"g-flex-col-xs"},u={1:"g-flex-col-sm-1",2:"g-flex-col-sm-2",3:"g-flex-col-sm-3",4:"g-flex-col-sm-4",5:"g-flex-col-sm-5",6:"g-flex-col-sm-6",7:"g-flex-col-sm-7",8:"g-flex-col-sm-8",9:"g-flex-col-sm-9",10:"g-flex-col-sm-10",11:"g-flex-col-sm-11",12:"g-flex-col-sm-12",auto:"g-flex-col-sm"},v={1:"g-flex-col-md-1",2:"g-flex-col-md-2",3:"g-flex-col-md-3",4:"g-flex-col-md-4",5:"g-flex-col-md-5",6:"g-flex-col-md-6",7:"g-flex-col-md-7",8:"g-flex-col-md-8",9:"g-flex-col-md-9",10:"g-flex-col-md-10",11:"g-flex-col-md-11",12:"g-flex-col-md-12",auto:"g-flex-col-md"},p={1:"g-flex-col-lg-1",2:"g-flex-col-lg-2",3:"g-flex-col-lg-3",4:"g-flex-col-lg-4",5:"g-flex-col-lg-5",6:"g-flex-col-lg-6",7:"g-flex-col-lg-7",8:"g-flex-col-lg-8",9:"g-flex-col-lg-9",10:"g-flex-col-lg-10",11:"g-flex-col-lg-11",12:"g-flex-col-lg-12",auto:"g-flex-col-md"},y={0:"g-flex-col-xs-offset-0",1:"g-flex-col-xs-offset-1",2:"g-flex-col-xs-offset-2",3:"g-flex-col-xs-offset-3",4:"g-flex-col-xs-offset-4",5:"g-flex-col-xs-offset-5",6:"g-flex-col-xs-offset-6",7:"g-flex-col-xs-offset-7",8:"g-flex-col-xs-offset-8",9:"g-flex-col-xs-offset-9",10:"g-flex-col-xs-offset-10",11:"g-flex-col-xs-offset-11",12:"g-flex-col-xs-offset-12"},b={0:"g-flex-col-sm-offset-0",1:"g-flex-col-sm-offset-1",2:"g-flex-col-sm-offset-2",3:"g-flex-col-sm-offset-3",4:"g-flex-col-sm-offset-4",5:"g-flex-col-sm-offset-5",6:"g-flex-col-sm-offset-6",7:"g-flex-col-sm-offset-7",8:"g-flex-col-sm-offset-8",9:"g-flex-col-sm-offset-9",10:"g-flex-col-sm-offset-10",11:"g-flex-col-sm-offset-11",12:"g-flex-col-sm-offset-12"},h={0:"g-flex-col-md-offset-0",1:"g-flex-col-md-offset-1",2:"g-flex-col-md-offset-2",3:"g-flex-col-md-offset-3",4:"g-flex-col-md-offset-4",5:"g-flex-col-md-offset-5",6:"g-flex-col-md-offset-6",7:"g-flex-col-md-offset-7",8:"g-flex-col-md-offset-8",9:"g-flex-col-md-offset-9",10:"g-flex-col-md-offset-10",11:"g-flex-col-md-offset-11",12:"g-flex-col-md-offset-12"},O={0:"g-flex-col-lg-offset-0",1:"g-flex-col-lg-offset-1",2:"g-flex-col-lg-offset-2",3:"g-flex-col-lg-offset-3",4:"g-flex-col-lg-offset-4",5:"g-flex-col-lg-offset-5",6:"g-flex-col-lg-offset-6",7:"g-flex-col-lg-offset-7",8:"g-flex-col-lg-offset-8",9:"g-flex-col-lg-offset-9",10:"g-flex-col-lg-offset-10",11:"g-flex-col-lg-offset-11",12:"g-flex-col-lg-offset-12"},E=function(e){var l=e.xs,o=e.sm,f=e.md,c=e.lg,n=e.xsOffset,r=e.smOffset,g=e.mdOffset,s=e.lgOffset,x=e.isReversed,a=e.children;return t.createElement("div",{className:"g-flex-col".concat(void 0!==i[l]?" "+i[l]:"").concat(void 0!==u[o]?" "+u[o]:"").concat(void 0!==v[f]?" "+v[f]:"").concat(void 0!==p[c]?" "+p[c]:"").concat(void 0!==y[n]?" "+y[n]:"").concat(void 0!==b[r]?" "+b[r]:"").concat(void 0!==h[g]?" "+h[g]:"").concat(void 0!==O[s]?" "+O[s]:"").concat(x?" g-flex-reverse":"")},void 0!==a?a:t.createElement(t.Fragment,null,"Content..."))};function j(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var o=[],t=!0,f=!1,c=void 0;try{for(var n,r=e[Symbol.iterator]();!(t=(n=r.next()).done)&&(o.push(n.value),!l||o.length!==l);t=!0);}catch(e){f=!0,c=e}finally{try{t||null==r.return||r.return()}finally{if(f)throw c}}return o}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(){return(w=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}var S=function(e){var l=e.children;return f.a.createElement(t.Fragment,null,l)},C=function(e){return f.a.createElement(S,w({title:"Example: 3-column Flexbox grid"},M({})),f.a.createElement(g,w({width:"fixed"},M({})),f.a.createElement(m,M({}),f.a.createElement(E,w({xs:"4",sm:"4",md:"4",lg:"4"},M({}))," .g-flex-col .g-flex-col-md-4 "),f.a.createElement(E,w({xs:"4",sm:"4",md:"4",lg:"4"},M({}))," .g-flex-col .g-flex-col-md-4 "),f.a.createElement(E,w({xs:"4",sm:"4",md:"4",lg:"4"},M({}))," .g-flex-col .g-flex-col-md-4 "))))},M=function(e){var l=j(Object(t.useState)(e&&e.value),2),o=l[0],f=l[1],c=j(Object(t.useState)(e&&e.value2),2),n=c[0],r=c[1],g=j(Object(t.useState)(e&&e.value3),2),s=g[0],x=g[1];return{value:o,value2:n,value3:s,onChange:function(e){return f(e.target.value)},onChange2:function(e){return r(e.target.value)},onChange3:function(e){return x(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?n.a.hydrate(f.a.createElement(C,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);