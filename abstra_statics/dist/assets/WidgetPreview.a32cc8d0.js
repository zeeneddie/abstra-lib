import{d as k,r as B,o as A,b as n,c as l,w as p,f as C,aq as D,eD as I,ey as P,f2 as S,u as y,bE as N,f3 as q,v as h,eA as E,ew as b,e as g,eu as c,eB as v,eC as V,aC as w,n as x,p as L}from"./outputWidgets.5cb6b216.js";import{S as $}from"./Steps.9233608d.js";import{W as F}from"./WidgetsFrame.246f3f51.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c3cd7475-bb48-4b81-97cc-bb0646a5c17c",o._sentryDebugIdIdentifier="sentry-dbid-c3cd7475-bb48-4b81-97cc-bb0646a5c17c")}catch{}})();const K=k({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(o,{emit:t}){const d=o,u=B(null);return A(()=>{u.value&&d.action.setElement(u.value)}),(r,i)=>(n(),l(y(q),null,{default:p(()=>[C(y(N),{ref_key:"element",ref:u,class:P(["next-button",r.disabled?"disabled":""]),loading:r.loading,disabled:r.disabled,onClick:i[0]||(i[0]=f=>t("click")),onKeydown:i[1]||(i[1]=S(f=>t("click"),["enter"]))},{default:p(()=>[D(I(r.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const M=h(K,[["__scopeId","data-v-e711f126"]]),O={class:"form"},z={class:"form-wrapper"},J={key:0,class:"buttons"},R=k({__name:"WidgetPreview",setup(o){const t=E(),d=B([]);function u(e){return x[e]||L[e]||null}function r(e){try{const s=JSON.parse(e);if(s.component=u(s.type),!s.component)throw new Error(`Widget ${s.type} not found`);return s.component?s:null}catch{return null}}function i(){const e=t.query.widget;return Array.isArray(e)?e.map(r).filter(Boolean):[r(e)]}function f(){return t.query.steps==="true"}function m(){const e=t.query.button;return e?Array.isArray(e)?e:[e]:[]}const _=e=>({name:e,isDefault:!1,isFocused:!1,focusOnButton:()=>{},addKeydownListener:()=>{},setElement:()=>{}});return(e,s)=>(n(),l(F,{"main-color":"#d14056",class:"preview",theme:"#fbfbfb",runtime:"form","font-family":"Inter"},{default:p(()=>[f()?(n(),l($,{key:0,"steps-info":{current:2,total:3}})):b("",!0),g("div",O,[g("div",z,[(n(!0),c(w,null,v(i(),(a,W)=>(n(),c("div",{key:W,class:"widget"},[(n(),l(V(a.component),{"user-props":a.userProps,value:a.userProps.value,errors:d.value},null,8,["user-props","value","errors"]))]))),128))]),m().length?(n(),c("div",J,[(n(!0),c(w,null,v(m(),a=>(n(),l(M,{key:a,"display-name":_(a).name,action:_(a)},null,8,["display-name","action"]))),128))])):b("",!0)])]),_:1}))}});const Q=h(R,[["__scopeId","data-v-ef293d5b"]]);export{Q as default};
//# sourceMappingURL=WidgetPreview.a32cc8d0.js.map