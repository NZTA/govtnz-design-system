!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),i=n.n(l),o=function(e){var t=e.hintId,n=e.legend,a=e.hint,l=e.children;return r.createElement("div",{className:"g-fieldsetBlock-form-group"},r.createElement("fieldset",{"aria-describedby":t,className:"g-fieldset"},r.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:r.createElement(r.Fragment,null,"Legend text")),void 0!==t?r.createElement(r.Fragment,null,r.createElement("div",{className:"g-fieldsetBlock-hint",id:t},void 0!==a?a:r.createElement(r.Fragment,null,"Hint text"))):"",r.createElement("div",null,void 0!==l?l:r.createElement(r.Fragment,null,"Fieldset contents"))))},d={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},c=function(e){var t=e.styleSize,n=e.marginBottom8,a=e.id,l=e.children;return r.createElement("h1",{className:"".concat(void 0!==d.styleSize[t]?d.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:a},void 0!==l?l:r.createElement(r.Fragment,null,"Example text"))},u=function(e){var t=e.fakeFocus,n=e.radioId,a=e.hintId,l=e.name,i=e.disabled,o=e.readOnly,d=e.autoFocus,c=e.value,u=e.checked,s=e.onChange,m=e.label,g=e.hint;return r.createElement("div",{className:"g-radios__item"},r.createElement("input",{"aria-describedby":a,className:"g-radios__input".concat(t?" :focus":""),id:n,type:"radio",name:l,disabled:i,readOnly:o,autoFocus:d,value:c,checked:u,onChange:s}),r.createElement("label",{className:"g-radios-label g-radios__label",htmlFor:n},void 0!==m?m:r.createElement(r.Fragment,null,"Label text")),r.createElement("div",{className:"g-radios-hint g-radios__hint",id:a},void 0!==g?g:r.createElement(r.Fragment,null,"Hint text")))};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},g=function(e){return a.a.createElement(m,{},a.a.createElement(o,s({},{},{legend:a.a.createElement(c,s({},{},{styleSize:"large",id:"providerChoiceTitle1"}),"Choose one provider"),hint:a.a.createElement("p",null,"Select one provider."),hintId:"hintId"}),a.a.createElement(u,s({},{},{label:"Sign in with Aardvark services",hint:"North Island only",hintId:"someHintId7",radioId:"anyRadioId7234",name:"providerChoice3",value:"provider1",labelId:"labelId5"})),a.a.createElement(u,s({},{},{label:"Sign in with Bumblebee services",hint:"North and South Island",hintId:"someHintId8",radioId:"anyRadioId8234",name:"providerChoice3",value:"provider2",labelId:"labelId8"})),a.a.createElement(u,s({},{},{label:"Sign in with Caterpillar company",hint:"All new Zealand territories",hintId:"someHintId7234",radioId:"anyRadioId9f",name:"providerChoice3",value:"provider3",labelId:"labelId9"}))))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.render(a.a.createElement(g,null),e):console.error("Couldn't find app mount point ","#root")})}]);