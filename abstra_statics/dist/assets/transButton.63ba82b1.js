import{F as y,o as b,er as O,d as S,U as c,f as h,R as f,b8 as u}from"./registerWidgets.d6e66474.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[l]="c79a7e6c-ff56-47db-a4c1-bfb4108c66c9",e._sentryDebugIdIdentifier="sentry-dbid-c79a7e6c-ff56-47db-a4c1-bfb4108c66c9")}catch{}})();const D=()=>{const e=y(!1);return b(()=>{e.value=O()}),e};var x=globalThis&&globalThis.__rest||function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)l.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const C={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},E=S({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup(e,l){let{slots:a,emit:t,attrs:o,expose:p}=l;const r=y(),g=n=>{const{keyCode:s}=n;s===u.ENTER&&n.preventDefault()},v=n=>{const{keyCode:s}=n;s===u.ENTER&&t("click",n)},m=n=>{t("click",n)},i=()=>{r.value&&r.value.focus()},w=()=>{r.value&&r.value.blur()};return b(()=>{e.autofocus&&i()}),p({focus:i,blur:w}),()=>{var n;const{noStyle:s,disabled:_}=e,k=x(e,["noStyle","disabled"]);let d={};return s||(d=c({},C)),_&&(d.pointerEvents="none"),h("div",f(f(f({role:"button",tabindex:0,ref:r},k),o),{},{onClick:m,onKeydown:g,onKeyup:v,style:c(c({},d),o.style||{})}),[(n=a.default)===null||n===void 0?void 0:n.call(a)])}}}),B=E;export{B as T,D as u};
//# sourceMappingURL=transButton.63ba82b1.js.map
