import{a as V}from"./ant-design.9ba9b232.js";import{f as d,eG as D,d as S,eJ as B,J as L,o as E,L as z,b as C,ev as O,v as A,r as y,S as _,w as i,e as P,u,ar as h,bV as U,ez as k,eD as I,cB as H,a$ as $,cz as j}from"./outputWidgets.bb2f46e4.js";import{a as M}from"./Base.3e5c9785.js";import{A as N}from"./Link.b478c0f2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="1c85e3cf-0cb4-4611-8d14-d85a8b836ad3",a._sentryDebugIdIdentifier="sentry-dbid-1c85e3cf-0cb4-4611-8d14-d85a8b836ad3")}catch{}})();var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const F=x;function w(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){J(a,s,t[s])})}return a}function J(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var p=function(e,t){var r=w({},e,t.attrs);return d(D,w({},r,{icon:F}),null)};p.displayName="SaveOutlined";p.inheritAttrs=!1;const T=p,Y={class:"unsaved-changes-handler"},g="You have unsaved changes. Are you sure you want to leave?",G=S({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(a){const e=a,t=o=>(o=o||window.event,o&&(o.returnValue=g),g),r=()=>{window.addEventListener("beforeunload",t)};B(async(o,n,l)=>{if(!e.hasChanges)return l();await V(g)?l():l(!1)});const s=()=>window.removeEventListener("beforeunload",t),c=o=>o?r():s();return L(()=>e.hasChanges,c),E(()=>c(e.hasChanges)),z(s),(o,n)=>(C(),O("div",Y))}});const R=A(G,[["__scopeId","data-v-fa94acdd"]]),q={style:{padding:"0px 4px"}},Z=S({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},setup(a){var o;const e=a,t=y((o=_.get("dontShowUnsavedChanges"))!=null?o:!1),r=()=>{_.set("dontShowUnsavedChanges",!0),t.value=!0},s=y(!1);async function c(){s.value=!0;try{await e.model.save()}catch{j.error({message:"Error saving"})}finally{s.value=!1}}return addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key==="s"&&(n.preventDefault(),c())}),addEventListener("beforeunload",n=>{e.model.hasChanges()&&(n.preventDefault(),n.returnValue="")}),(n,l)=>{var f;return C(),O($,null,[d(u(H),{placement:"left",visible:n.model.hasChanges()&&!t.value&&!n.neverShowPopover},{content:i(()=>[P("div",q,[d(u(M),null,{default:i(()=>[h("You have unsaved changes")]),_:1}),d(u(N),{onClick:r},{default:i(()=>[h("Don't show this again")]),_:1})])]),default:i(()=>{var m,b;return[d(u(U),{class:k(["save-button",{changes:(m=n.model)==null?void 0:m.hasChanges()}]),loading:s.value,disabled:!((b=n.model)!=null&&b.hasChanges()),onClick:l[0]||(l[0]=v=>c())},{icon:i(()=>[d(u(T))]),default:i(()=>{var v;return[h(I((v=n.model)!=null&&v.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"])]}),_:1},8,["visible"]),d(R,{"has-changes":(f=n.model)==null?void 0:f.hasChanges()},null,8,["has-changes"])],64)}}});export{Z as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.ccdeb496.js.map