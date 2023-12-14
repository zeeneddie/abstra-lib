import{a as y}from"./ant-design.07b21cc9.js";import{f as u,eF as _,d as m,eH as w,H as C,o as O,K as S,b as p,eu as b,t as V,r as D,w as v,u as h,az as E,eC as H,ey as L,bX as z,b6 as B}from"./outputWidgets.a177f9c3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="768bd2c4-cf04-42a0-975f-0bf8e716cc9c",a._sentryDebugIdIdentifier="sentry-dbid-768bd2c4-cf04-42a0-975f-0bf8e716cc9c")}catch{}})();var I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const U=I;function g(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(n){k(a,n,t[n])})}return a}function k(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var f=function(e,t){var r=g({},e,t.attrs);return u(_,g({},r,{icon:U}),null)};f.displayName="SaveOutlined";f.inheritAttrs=!1;const P=f,j={class:"unsaved-changes-handler"},i="You have unsaved changes. Are you sure you want to leave?",M=m({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(a){const e=a,t=s=>(s=s||window.event,s&&(s.returnValue=i),i),r=()=>{window.addEventListener("beforeunload",t)};w(async(s,l,o)=>{if(!e.hasChanges)return o();await y(i)?o():o(!1)});const n=()=>window.removeEventListener("beforeunload",t),d=s=>s?r():n();return C(()=>e.hasChanges,d),O(()=>d(e.hasChanges)),S(n),(s,l)=>(p(),b("div",j))}});const $=V(M,[["__scopeId","data-v-fa94acdd"]]),N=m({__name:"SaveButton",props:{model:{}},setup(a){const e=a,t=D(!1);async function r(){t.value=!0;try{await e.model.save()}finally{t.value=!1}}return addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key==="s"&&(n.preventDefault(),r())}),addEventListener("beforeunload",n=>{e.model.hasChanges()&&(n.preventDefault(),n.returnValue="")}),(n,d)=>{var s,l,o;return p(),b(B,null,[u(h(z),{class:L(["save-button",{changes:(s=n.model)==null?void 0:s.hasChanges()}]),loading:t.value,disabled:!((l=n.model)!=null&&l.hasChanges()),onClick:d[0]||(d[0]=c=>r())},{icon:v(()=>[u(h(P))]),default:v(()=>{var c;return[E(H((c=n.model)!=null&&c.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"]),u($,{"has-changes":(o=n.model)==null?void 0:o.hasChanges()},null,8,["has-changes"])],64)}}});export{N as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.47f53e89.js.map
